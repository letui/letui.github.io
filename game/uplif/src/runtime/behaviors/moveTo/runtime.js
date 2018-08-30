var ls;
(function (ls) {
    var MoveToBehavior = (function (_super) {
        __extends(MoveToBehavior, _super);
        function MoveToBehavior() {
            _super.call(this);
            this.targetX = 0;
            this.targetY = 0;
            this.speed = 0;
            this._a = 0;
        }
        var d = __define,c=MoveToBehavior,p=c.prototype;
        p.onCreate = function () {
            this.enabled = ls.eval_e(this.enabled);
            this.maxSpeed = ls.eval_e(this.maxSpeed);
            this.acceleration = ls.eval_e(this.acceleration);
            this.deceleration = ls.eval_e(this.deceleration);
            this.targetX = this.inst.x;
            this.targetY = this.inst.y;
            this._sourceX = this.inst.x;
            this._sourceY = this.inst.y;
            this.speed = 0;
            this._isMoving = false;
        };
        d(p, "remaindistance"
            ,function () {
                var dx = this.targetX - this.inst.x;
                var dy = this.targetY - this.inst.y;
                return Math.sqrt(dx * dx + dy * dy);
            }
        );
        d(p, "movedistance"
            ,function () {
                var dx = this.inst.x - this._sourceX;
                var dy = this.inst.y - this._sourceY;
                return Math.sqrt(dx * dx + dy * dy);
            }
        );
        p.tick = function () {
            if (!this._isMoving)
                return;
            var dt = 1 / 60;
            var slowdown = false;
            if (this.deceleration !== 0) {
                var _s = this.speed;
                var _distance = (_s * _s) / (2 * this.deceleration * dt);
                slowdown = _distance >= this.remaindistance;
            }
            var acc = slowdown ? -this.deceleration : this.acceleration;
            if (this.acceleration === 0 && this.deceleration === 0 && this.speed <= 0)
                this.speed = this.maxSpeed * dt;
            else
                this.speed += acc * dt;
            if (this.speed > this.maxSpeed)
                this.speed = this.maxSpeed;
            var dx = this.targetX - this.inst.x;
            var dy = this.targetY - this.inst.y;
            this._a = Math.atan2(dy, dx);
            if (this.remaindistance < this.speed) {
                this.inst.x = this.targetX;
                this.inst.y = this.targetY;
                this._isMoving = false;
                this.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, this.reachTargetPosition));
            }
            else {
                this.inst.x += this.speed * Math.cos(this._a);
                this.inst.y += this.speed * Math.sin(this._a);
            }
        };
        p.isMoving = function (event) {
            return { instances: [this.inst], status: this._isMoving };
        };
        p.reachTargetPosition = function (event) {
            return { instances: [this.inst], status: true };
        };
        p.compareMoveAngle = function (event) {
            return { instances: [this.inst], status: ls.compare(ls.MathUtils.toAngle(this._a), event.oprerationType, event.angle) };
        };
        p.compareSpeed = function (event) {
            return { instances: [this.inst], status: ls.compare(this.speed, event.oprerationType, event.speed) };
        };
        p.compareMoveDistance = function (event) {
            return { instances: [this.inst], status: ls.compare(this.movedistance, event.oprerationType, event.distance) };
        };
        p.moveToObject = function (object) {
            if (this.targetX !== object.x || this.targetY !== object.y) {
                this.targetX = object.x;
                this.targetY = object.y;
                this._isMoving = true;
                this.speed = 0;
                this._sourceX = this.inst.x;
                this._sourceY = this.inst.y;
            }
        };
        p.moveToDeltaXY = function (x, y) {
            x = ls.eval_e(x);
            y = ls.eval_e(y);
            if (x !== 0 || y !== 0) {
                this.targetX = this.inst.x + x;
                this.targetY = this.inst.y + y;
                this._isMoving = true;
                this.speed = 0;
                this._sourceX = this.inst.x;
                this._sourceY = this.inst.y;
            }
        };
        p.moveToPos = function (x, y) {
            x = ls.eval_e(x);
            y = ls.eval_e(y);
            if (x !== 0 || y !== 0) {
                this.targetX = x;
                this.targetY = y;
                this._isMoving = true;
                this.speed = 0;
                this._sourceX = this.inst.x;
                this._sourceY = this.inst.y;
            }
        };
        p.moveToDistanceAngle = function (distance, angle) {
            distance = ls.eval_e(distance);
            if (distance > 0) {
                angle = ls.eval_e(angle);
                var vx = Math.cos(ls.MathUtils.toRadian(angle)) * distance;
                var vy = Math.sin(ls.MathUtils.toRadian(angle)) * distance;
                this.targetX = this.inst.x + vx;
                this.targetY = this.inst.y + vy;
                this._isMoving = true;
                this.speed = 0;
                this._sourceX = this.inst.x;
                this._sourceY = this.inst.y;
            }
        };
        p.setAcceleration = function (acc) {
            this.acceleration = ls.eval_e(acc);
        };
        p.setDecceleration = function (decc) {
            this.deceleration = ls.eval_e(decc);
        };
        p.setSpeed = function (speed) {
            this.speed = ls.eval_e(speed);
            if (this.speed > this.maxSpeed)
                this.speed = this.maxSpeed;
        };
        p.setMaxSpeed = function (maxSpeed) {
            this.maxSpeed = ls.eval_e(maxSpeed);
        };
        p.stop = function () {
            this._isMoving = false;
            this.speed = 0;
        };
        p.saveToJSON = function () {
            var o = _super.prototype.saveToJSON.call(this);
            o.maxSpeed = this.maxSpeed;
            o.acceleration = this.acceleration;
            o.deceleration = this.deceleration;
            return o;
        };
        p.loadFromJSON = function (o) {
            if (o) {
                this.maxSpeed = o.maxSpeed;
                this.acceleration = o.acceleration;
                this.deceleration = o.deceleration;
                _super.prototype.loadFromJSON.call(this, o);
            }
        };
        p.clone = function () {
            var bh = _super.prototype.clone.call(this);
            bh.maxSpeed = this.maxSpeed;
            bh.acceleration = this.acceleration;
            bh.deceleration = this.deceleration;
            return bh;
        };
        return MoveToBehavior;
    }(ls.BaseBehavior));
    ls.MoveToBehavior = MoveToBehavior;
    egret.registerClass(MoveToBehavior,'ls.MoveToBehavior');
    var MoveToisMovingEvent = (function (_super) {
        __extends(MoveToisMovingEvent, _super);
        function MoveToisMovingEvent() {
            _super.apply(this, arguments);
        }
        var d = __define,c=MoveToisMovingEvent,p=c.prototype;
        return MoveToisMovingEvent;
    }(ls.BaseEvent));
    ls.MoveToisMovingEvent = MoveToisMovingEvent;
    egret.registerClass(MoveToisMovingEvent,'ls.MoveToisMovingEvent');
    var OnReachTargetPositionEvent = (function (_super) {
        __extends(OnReachTargetPositionEvent, _super);
        function OnReachTargetPositionEvent() {
            _super.apply(this, arguments);
        }
        var d = __define,c=OnReachTargetPositionEvent,p=c.prototype;
        return OnReachTargetPositionEvent;
    }(ls.BaseEvent));
    ls.OnReachTargetPositionEvent = OnReachTargetPositionEvent;
    egret.registerClass(OnReachTargetPositionEvent,'ls.OnReachTargetPositionEvent');
    var CompareMoveAngleEvent = (function (_super) {
        __extends(CompareMoveAngleEvent, _super);
        function CompareMoveAngleEvent() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CompareMoveAngleEvent,p=c.prototype;
        return CompareMoveAngleEvent;
    }(ls.BaseEvent));
    ls.CompareMoveAngleEvent = CompareMoveAngleEvent;
    egret.registerClass(CompareMoveAngleEvent,'ls.CompareMoveAngleEvent');
    var MoveToCompareSpeedEvent = (function (_super) {
        __extends(MoveToCompareSpeedEvent, _super);
        function MoveToCompareSpeedEvent() {
            _super.apply(this, arguments);
        }
        var d = __define,c=MoveToCompareSpeedEvent,p=c.prototype;
        return MoveToCompareSpeedEvent;
    }(ls.BaseEvent));
    ls.MoveToCompareSpeedEvent = MoveToCompareSpeedEvent;
    egret.registerClass(MoveToCompareSpeedEvent,'ls.MoveToCompareSpeedEvent');
    var CompareMoveDistanceEvent = (function (_super) {
        __extends(CompareMoveDistanceEvent, _super);
        function CompareMoveDistanceEvent() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CompareMoveDistanceEvent,p=c.prototype;
        return CompareMoveDistanceEvent;
    }(ls.BaseEvent));
    ls.CompareMoveDistanceEvent = CompareMoveDistanceEvent;
    egret.registerClass(CompareMoveDistanceEvent,'ls.CompareMoveDistanceEvent');
})(ls || (ls = {}));
