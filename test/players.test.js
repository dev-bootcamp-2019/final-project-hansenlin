const Players = artifacts.require('Players');
const League = artifacts.require('League');

contract('league test', async accounts => {
    it("should draft a player", async () => {
    let instance = await Players.deployed();
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Patrick Mahomes"), 1, 19950917010, { from: accounts[0] });

    let owner = await instance.ownerOf.call(19950917010);

    assert.equal(owner, accounts[0]);
  });

  it("should create a league at the conclusion of the draft", async () => {
    let instance = await Players.deployed();

    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Deshaun Watson"), 1, 19950914012, { from: accounts[1] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Matt Ryan"), 1, 19850517003, { from: accounts[2] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Ben Roethlisberger"), 1, 19820302011, { from: accounts[3] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Andrew Luck"), 1, 19890912001, { from: accounts[4] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Dak Prescott"), 1, 19930729135, { from: accounts[5] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Russell Wilson"), 1, 19881129075, { from: accounts[6] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Aaron Rodgers"), 1, 19831202024, { from: accounts[7] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Drew Brees"), 1, 19790115032, { from: accounts[8] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Jared Goff"), 1, 19941014001, { from: accounts[9] });

    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Nick Chubb"), 2, 19951227035, { from: accounts[9] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Alvin Kamara"), 2, 19950725067, { from: accounts[8] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Chris Carson"), 2, 19940916249, { from: accounts[7] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Melvin Gordon"), 2, 19930413015, { from: accounts[6] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Frank Gore"), 2, 19830514065, { from: accounts[5] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("LeSean McCoy"), 2, 19880712053, { from: accounts[4] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Lamar Miller"), 2, 19910425097, { from: accounts[3] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Ezekiel Elliott"), 2, 19950722004, { from: accounts[2] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Saquon Barkley"), 2, 19970207002, { from: accounts[1] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Todd Gurley"), 2, 19940803010, { from: accounts[0] });

    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Amari Cooper"), 3, 19940617004, { from: accounts[0] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Michael Thomas"), 3, 19930303047, { from: accounts[1] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Julian Edelman"), 3, 19860522232, { from: accounts[2] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Jarvis Landry"), 3, 19921128063, { from: accounts[3] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Stefon Diggs"), 3, 19931129146, { from: accounts[4] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Adam Thielen"), 3, 19900822000, { from: accounts[5] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Antonio Brown"), 3, 19880710195, { from: accounts[6] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Julio Jones"), 3, 19890208006, { from: accounts[7] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("DeAndre Hopkins"), 3, 19920606027, { from: accounts[8] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Tyreek Hill"), 3, 19940301165, { from: accounts[9] });

    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Tyler Boyd"), 3, 19941115055, { from: accounts[9] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Kenny Golladay"), 3, 19931103096, { from: accounts[8] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Keenan Allen"), 3, 19920427076, { from: accounts[7] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Chris Godwin"), 3, 19960227084, { from: accounts[6] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Emmanuel Sanders"), 3, 19870317082, { from: accounts[5] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Calvin Ridley"), 3, 19941220026, { from: accounts[4] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Tyler Lockett"), 3, 19920928069, { from: accounts[3] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Davante Adams"), 3, 19921224053, { from: accounts[2] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Mike Evans"), 3, 19930821007, { from: accounts[1] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Brandin Cooks"), 3, 19930925020, { from: accounts[0] });

    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Travis Kelce"), 4, 19891005063, { from: accounts[0] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Zach Ertz"), 4, 19901110035, { from: accounts[1] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("George Kittle"), 4, 19931009146, { from: accounts[2] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Eric Ebron"), 4, 19930410010, { from: accounts[3] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Jared Cook"), 4, 19870407089, { from: accounts[4] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Austin Hooper"), 4, 19941104081, { from: accounts[5] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Trey Burton"), 4, 19911028000, { from: accounts[6] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Kyle Rudolph"), 4, 19891109043, { from: accounts[7] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("David Njoku"), 4, 19960710029, { from: accounts[8] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Vance McDonald"), 4, 19900613055, { from: accounts[9] });

    await instance.draftPlayer.sendTransaction(web3.utils.sha3("David Johnson"), 2, 19911216086, { from: accounts[9] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("DeSean Jackson"), 3, 19861201049, { from: accounts[8] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Nelson Agholor"), 3, 19930524020, { from: accounts[7] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Kenyan Drake"), 2, 19940126073, { from: accounts[6] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Mohamed Sanu"), 3, 19890822083, { from: accounts[5] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Adam Humphries"), 3, 19930624000, { from: accounts[4] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Larry Fitzgerald"), 3, 19830831003, { from: accounts[3] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Marlon Mack"), 2, 19960307143, { from: accounts[2] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Mike Williams"), 3, 19941004007, { from: accounts[1] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Alshon Jeffery"), 3, 19900214045, { from: accounts[0] });

    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Justin Tucker"), 5, 19891121000, { from: accounts[0] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Wil Lutz"), 5, 19940707000, { from: accounts[1] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Jason Myers"), 5, 19910512000, { from: accounts[2] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Harrison Butker"), 5, 19950714233, { from: accounts[3] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Mason Crosby"), 5, 19840903193, { from: accounts[4] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Aldrick Rosas"), 5, 19941230000, { from: accounts[5] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Robbie Gould"), 5, 19821206000, { from: accounts[6] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Adam Vinatieri"), 5, 19721228000, { from: accounts[7] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Stephen Gostkowski"), 5, 19840128118, { from: accounts[8] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Sebastian Janikowski"), 5, 19780302017, { from: accounts[9] });

    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Bears"), 6, 99941115055, { from: accounts[9] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Rams"), 6, 99931103096, { from: accounts[8] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Texans"), 6, 99920427076, { from: accounts[7] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Patriots"), 6, 99960227084, { from: accounts[6] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Broncos"), 6, 99870317082, { from: accounts[5] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Chiefs"), 6, 99941220026, { from: accounts[4] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Ravens"), 6, 99920928069, { from: accounts[3] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Seahawks"), 6, 99921224053, { from: accounts[2] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Vikings"), 6, 99930821007, { from: accounts[1] });
    await instance.draftPlayer.sendTransaction(web3.utils.sha3("Colts"), 6, 99930925020, { from: accounts[0] });

    let leagueAddress = await instance.league.call();

    assert.ok(leagueAddress);
  });

  it("should add a player", async () => {
    let instance = await Players.deployed();
    
    await instance.addPlayer.sendTransaction(web3.utils.sha3("Marcus Mariota"), 1, 19931030002, { from: accounts[1] });

    let owner = await instance.ownerOf.call(19931030002);

    assert.equal(owner, accounts[1]);
  });


  it("should create a game and validate its scores", async () => {
    let instance = await Players.deployed();
    
    await instance.setRoster.sendTransaction(0, 19950917010, 19940803010, 19940617004, 19930925020, 19891005063, 19900214045, 19891121000, 99930925020, { from: accounts[0] });
    await instance.setRoster.sendTransaction(0, 19950914012, 19970207002, 19930303047, 19930821007, 19901110035, 19941004007, 19940707000, 99930821007, { from: accounts[1] });

    let leagueAddress = await instance.league.call();
    let league = await League.at(leagueAddress);

    await league.setScores.sendTransaction(0, 7, 14, { from: accounts[0] });
    await league.setScores.sendTransaction(0, 14, 7, { from: accounts[1] });

    await league.validateGame.sendTransaction(accounts[0], 0, { from: accounts[1] });
    await league.validateGame.sendTransaction(accounts[0], 0, { from: accounts[2] });
    await league.validateGame.sendTransaction(accounts[0], 0, { from: accounts[3] });
    await league.validateGame.sendTransaction(accounts[0], 0, { from: accounts[4] });
    await league.validateGame.sendTransaction(accounts[0], 0, { from: accounts[5] });
    await league.validateGame.sendTransaction(accounts[0], 0, { from: accounts[6] });
    await league.validateGame.sendTransaction(accounts[0], 0, { from: accounts[7] });
    await league.validateGame.sendTransaction(accounts[0], 0, { from: accounts[8] });
    await league.validateGame.sendTransaction(accounts[0], 0, { from: accounts[9] });

    let game =  await league.getGame.call(accounts[0], 0);

    assert.equal(game[0], 7);
    assert.equal(game[1], 14);
  });
});


