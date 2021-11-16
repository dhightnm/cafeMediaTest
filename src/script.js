let adCount = 1;
let paragraphs = document.getElementsByTagName("p");
    
googletag.cmd.push(() => {
// Starting at 6 because that is the first paragraph in the main article
  for(var i=6; i < paragraphs.length; paragraphs.length % 9){
    let IS_NOT_IMAGE = paragraphs[i].children.length === 0 || paragraphs[i].children[0].tagName !== 'IMG'
    if(IS_NOT_IMAGE) {

      var bannerMapping = googletag.sizeMapping()
      .addSize([0, 0], [300, 250])
      .addSize([1000, 0], [320, 50])
      .build();

      googletag.defineSlot(`/18190176/AdThrive_Content_${adCount}/test`,[[300, 250], [320,50]], `banner-ad${adCount}`)
      .defineSizeMapping(bannerMapping)
      .setTargeting('test', 'lazyload')
      .addService(googletag.pubads());

    // Creates the adDiv with the display script and append it to each eligable 
    // paragraph tag.
      let adDiv = document.createElement('div');
      adDiv.id = `banner-ad${adCount}`;
      adDiv.className = 'ad';
      let adScript = document.createElement('script');
      adScript.setAttribute('type', 'text/javascript');
      adScript.async = true;
      adScript.innerHTML = `googletag.cmd.push(function() {
          googletag.display('banner-ad${adCount}');
        });`
      adDiv.appendChild(adScript);
      paragraphs[i].parentNode.insertBefore(adDiv, paragraphs[i].nextSibling)
      adCount++;
      console.log(adCount)
    }  
  }
});