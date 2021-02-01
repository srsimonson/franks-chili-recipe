var linkData = {
	campaign: 'Range Digital Test',
	channel: 'facebook',
	feature: 'dashboard',
	stage: 'new user',
	tags: [ 'tag1', 'tag2', 'tag3' ],
	alias: '',
	data: {
	  'custom_bool': true,
	  'custom_int': Date.now(),
	  'custom_string': 'hello',
	  '$og_title': 'Title',
	  '$og_description': 'Description',
	  '$og_image_url':'http://lorempixel.com/400/400'
	}
  };
  
  branch.link(linkData, function(err, link) {
	document.getElementById('button').onclick = function() {
	  window.open(link || err);
	};
  //   document.getElementById('anchor').href = link || err;
  });