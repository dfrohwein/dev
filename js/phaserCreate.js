g2a.create = function ()
{
    g2a.game.stage.backgroundColor = '#2d2d8d';

    var bmd = g2a.game.add.bitmapData(800, 600);
    bmd.addToWorld(8, 8);

    var sprite = g2a.game.add.sprite(100, 64, 'sky');
    sprite.tint = 0;
    sprite.scale.set(0.1,0.1);

    bmd.draw(sprite);

    sprite.tint = 0xffffff;
};
