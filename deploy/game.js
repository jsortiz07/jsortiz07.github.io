var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

    
    
    var game = new Phaser.Game(config);

    function preload ()
    {
        this.load.image('motherboard', './assets/motherboard.png');
        this.load.image('cpu', 'assets/cpu.png');
        this.load.image('gpu', 'assets/gpu.png');
        this.load.image('ram', 'assets/ram.png');
        this.load.image('storage', 'assets/storage.png');
        this.load.image('psu', 'assets/psu.png');
        this.load.image('case', 'assets/case.png');
    }
    
    function create ()
    {
        this.add.image(400, 300, 'case');
    
        motherboard = this.physics.add.sprite(400, 200, 'motherboard');
        cpu = this.physics.add.sprite(200, 400, 'cpu');
        gpu = this.physics.add.sprite(600, 400, 'gpu');
        ram = this.physics.add.sprite(400, 400, 'ram');
        storage = this.physics.add.sprite(200, 200, 'storage');
        psu = this.physics.add.sprite(600, 200, 'psu');
    
        this.input.setDraggable(motherboard);
        this.input.setDraggable(cpu);
        this.input.setDraggable(gpu);
        this.input.setDraggable(ram);
        this.input.setDraggable(storage);
        this.input.setDraggable(psu);
    
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
    
            gameObject.x = dragX;
            gameObject.y = dragY;
    
        });
    }
    
    function update ()
    {
        if (motherboard.x > 350 && motherboard.x < 450 && motherboard.y > 150 && motherboard.y < 250 &&
            cpu.x > 150 && cpu.x < 250 && cpu.y > 350 && cpu.y < 450 &&
            gpu.x > 550 && gpu.x < 650 && gpu.y > 350 && gpu.y < 450 &&
            ram.x > 350 && ram.x < 450 && ram.y > 350 && ram.y < 450 &&
            storage.x > 150 && storage.x < 250 && storage.y > 150 && storage.y < 250 &&
            psu.x > 550 && psu.x < 650 && psu.y > 150 && psu.y < 250) {
    
            this.add.text(400, 100, '¡Ensamblado completo!', { fontSize: '32px', fill: '#000' });
        }
    }



