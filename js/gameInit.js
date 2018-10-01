

window.onload = function() {

    g2a.game = new Phaser.Game(
        g2a.w,
        g2a.h,
        Phaser.CANVAS,
        'phaser-example',
        { preload: g2a.preload, create: g2a.create }
        );

    g2a.update = function ()
    {
    }
}