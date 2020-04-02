


var title = document.getElementsByClassName("h_title")[0];
var s_button = document.getElementById("submit_btn");
var r_button = document.getElementById("reset_btn");
var css_button = document.getElementById("css_btn");


function changeTitle(newTitle)
{
	title.innerText = newTitle;
}

s_button.addEventListener('click', function() {
	changeTitle(document.getElementById("entry_form").value)
});

r_button.addEventListener('click', function() {
	changeTitle("Trevor Trusty");
});

css_button.addEventListener('click', function() {
	(function(){var h,a,f;a=document.getElementsByTagName('link');for(h=0;h<a.length;h++){f=a[h];if(f.rel.toLowerCase().match(/stylesheet/)&&f.href){var g=f.href.replace(/(&|%5C?)forceReload=\d+/,'');f.href=g+(g.match(/\?/)?'&':'?')+'forceReload='+(new Date().valueOf())}}})()
});