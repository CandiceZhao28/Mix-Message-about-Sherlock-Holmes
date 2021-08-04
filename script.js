const obj = {
    who: ['Sherlock Holmes', 'John Watson', 'Mycroft Holmes', 'Mrs Hudson', 'The taxicab driver (also the serial-killer)', 'Jim Moriarty', 'The lady in pink', 'Detective Lestrade', 'Molly Hooper', 'The East Wind', 'Marry Watson', 'Sally Donovan', 'Henderson'],
    doesWhat: ['committed suicide', 'was found dead', 'was murdered', 'was kidnapped by criminals', 'served in a war', 'moved into a flat', 'spied for money', 'shot a cabbie', 'had a sponsor', 'smuggled an antique Chinese Vase', 'found a dead man\' body'],
    where: ['on Baker Street', 'in Afghanistan', 'at a bank in the City', 'at The British Museum', 'near the Waterloo Bridge', 'by the swimming pool', 'at St Bartholomew\'s Hospotal'],
    message() {
        const rand1 = Math.floor(Math.random()*this.who.length);  
        const rand2 = Math.floor(Math.random()*this.doesWhat.length);
        const rand3 = Math.floor(Math.random()*this.where.length);
        const msg = this.who[rand1] + this.doesWhat[rand2] + this.where[rand3] + '...';
        console.log(msg);
    }
};
obj.message();
