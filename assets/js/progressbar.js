// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Line(container, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#d47de4',
  svgStyle: {width: '100%', height: '100%' , display: 'block'}
});

window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  var scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
  bar.set(scrollPercent);
});