// Copyright 2015 Google Inc. All Rights Reserved.
// You may study, modify, and use this example for any purpose.
// Note that this example is provided "as is", WITHOUT WARRANTY
// of any kind either expressed or implied.

var adsController,
    adTag = 'video_image_text',
    adsenseChannel = "9255651389";

/**
 * Initialize the Outstream SDK.
 */
window.onload = function () {
    var extraChannels,
        outstreamContainer = document.getElementById( 'outstreamContainer' );

    if ( !outstreamContainer ) {
        outstreamContainer = document.createElement( 'DIV' );
        outstreamContainer.id = 'outstreamContainer';
    }
    adsController = new google.outstream.AdsController(
        outstreamContainer,
        onAdLoaded,
        onDone
    );

    //document.getElementById('requestAndShow').disabled = false;
    adsController.initialize( );

    if( isMobile() ) {
        adTag = 'image_text'
    }

    extraChannels = getExtraChannels() || [];

    extraChannels.forEach( function ( channel ) {
        addChannel( channel );
    } );

    window.addEventListener("resize", function () { adsController.resize( document.body.clientWidth, document.body.clientHeight ); } );
    adsController.resize( document.body.clientWidth, document.body.clientHeight );

    // Request ads
    var adTagUrl = 'https://googleads.g.doubleclick.net/pagead/ads?' +
        'ad_type=' + adTag +
        '&client=ca-games-pub-3573225172965115' +
        '&channel=' + adsenseChannel +
        '&videoad_start_delay=0' +
        '&description_url=http%3A%2F%2Fwww.google.com' +
        '&max_ad_duration=30000';

    adsController.requestAds(adTagUrl);
};

/*
 * Add channel to default channel
 */
function addChannel( channel ){
    channel && ( adsenseChannel = adsenseChannel + "+" + channel );
}
/*
 * Callback for when ad has completed loading.
 */
function onAdLoaded() {
    playAd( );
}

/*
 * Playback video ad
 */
function playAd( ) {
    adsController.showAd();
}

/*
 * Callback for when ad has completed playback.
 */
function onDone( ) {
    // Show content
    gotoGameUserClose( );
}
