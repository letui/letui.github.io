var $blog={
total:1,
last:14,
size:12,
count:0
}
function initBlogList(size){
if(size)$blog.size=size;
for(i=$blog.last;i>0;i--){
				$blog.count++;
				if($blog.count>$blog.size)break;
				$.ajax({
					url:"blog/"+i+"/"+"text.html?"+Math.random(),async:false,
					success:function(html){
						var txArray=html.split("#");
						var tmpl=$(".item[tpl=blog]").html();
						var item=$(".item[tpl=blog]").clone();
						tmpl=tmpl.replace("#tpl_image",i+"/img.png?"+Math.random());
						tmpl=tmpl.replace("#tpl_title",txArray[0]);
						tmpl=tmpl.replace("#tpl_id",i);
						tmpl=tmpl.replace("#tpl_label","分类:"+txArray[1]);
						tmpl=tmpl.replace("#tpl_summary",txArray[2].substr(0,140));
						item.removeAttr("tpl");
						item.html(tmpl);
						$("#tpl_blog_list").append(item);
					}
				});
			}
$(".item[tpl=blog]").remove();
}
function initBlogPages(){
	for(i=$blog.last;i>0;i--){
					$blog.count++;
					if($blog.count>$blog.size)break;
					$.ajax({
						url:"blog/"+i+"/"+"text.html?"+Math.random(),async:false,
						success:function(html){
							var txArray=html.split("#");
							var tmpl=$(".item[tpl=blog]").html();
							var item=$(".item[tpl=blog]").clone();
							//tmpl=tmpl.replace("#tpl_image",i+"/img.png?"+Math.random());
							tmpl=tmpl.replace("#tpl_title",txArray[0]);
							tmpl=tmpl.replace("#tpl_id",i);
							tmpl=tmpl.replace("#tpl_label","分类:"+txArray[1]);
							tmpl=tmpl.replace("#tpl_summary",txArray[2].substr(0,140));
							item.removeAttr("tpl");
							item.html(tmpl);
							$("#tpl_blog_list").append(item);
						}
					});
				}
	$(".item[tpl=blog]").remove();
	}

function initArticle(id){
	$.ajax({
		url:"blog/"+id+"/"+"text.html?"+Math.random(),async:false,
		success:function(html){
			var txArray=html.split("#");
			var tmpl=$(".item[tpl=blog]").html();
			var item=$(".item[tpl=blog]");
			tmpl=tmpl.replace("#tpl_image",id+"/img.png?"+Math.random());
			tmpl=tmpl.replace("#tpl_title",txArray[0]);
			tmpl=tmpl.replace("#tpl_label","分类:"+txArray[1]);
			tmpl=tmpl.replace("#tpl_summary",txArray[2].replace("\n","<br>"));
			item.removeAttr("tpl");
			item.html(tmpl);
		}
	});
}