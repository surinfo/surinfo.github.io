(function () {
  var images = [
    '20020426', '20090828', '20121227', '20141106', '20150704', '20160510', '20160729', '20180723',
    '20021018', '20110801', '20130213', '20150519', '20150923', '20160723', '20161108', '20180731',
    '20061212', '20120104', '20130622', '20150622', '20151108', '20160726', '20170711', '20181110',
  ].sort();

  preloadImages(images);

  loadFrames(images);

}());

function loadFrames(images) {
  loadFrame(0, images);
}

function loadFrame(i, images) {
  // https://stackoverflow.com/a/5058336
  var url = getUrl(i, images); 
  $('<img/>').attr('src', url).on('load', function() {
    $(this).remove();
    displayFrame(i, images);
    setTimeout(function () {
      loadFrame((i + 1) % images.length, images);
    }, (images.length === i + 1) ? 2000 : 500);
  });
}

function preloadImages(images) {
  for (var i = 0, len = images.length; i < len; i++) {
    var url = getUrl(i, images); 
    $('<img/>').attr('src', url).on('load', function() {
      $(this).remove();
    });
  }
}

function displayFrame(i, images) {
  var url = getUrl(i, images);
  var date = getDate(i, images);
  // $('body').css('background-image', 'url(' + url + ')');
  $('#sur').attr('src', url);
  $('#info').text(date);
}

function getUrl(i, images) {
  return 'img/jpg/' + images[i] + '.jpg';
}

function getDate(i, images) {
  var date = images[i];
  return date.slice(0, 4) + '-' + date.slice(4, 6) + '-' + date.slice(6);
}
