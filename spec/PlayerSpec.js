describe("Player", function() {
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrow("song is already playing");
    });
  });
});

describe("LinkedNode", function() {
	var linkedNode = new SCG.Library.LinkedNode();
	
	it("should be instantiable", function() {
		expect(linkedNode).toBeTruthy();
	});
	
	it("should be set to undefined on instantiation", function() {
		expect(linkedNode.getValue()).toEqual(undefined);
	})
});

describe("LinkedList", function() {
	var linkedList = new SCG.Library.LinkedList();
	
	it("should be instantiable", function() {
		expect(linkedList).toBeTruthy();
	});
	
	it("should return undefined on instantiation", function() {
		expect(linkedList.getHead().getValue()).toEqual(undefined);
	});
	
	it("shouldn't allow me to pop negativly", function() {
		expect(linkedList.pop()).toEqual(undefined);
		expect(linkedList.pop()).toEqual(undefined);
		expect(linkedList.pop()).toEqual(undefined);
		expect(linkedList.pop()).toEqual(undefined);
	});
	
	it("should let me push a lot, then pop even more and not be a problem", function() {
		expect(linkedList.pop()).toEqual(undefined);
		expect(linkedList.print()).toEqual('undefined');
		
		linkedList.push(1);
		expect(linkedList.print()).toEqual('1');
		linkedList.push(2);
		expect(linkedList.print()).toEqual('1 2');
		linkedList.push(3);
		expect(linkedList.print()).toEqual('1 2 3');
		linkedList.push(4);
		expect(linkedList.print()).toEqual('1 2 3 4');

		console.log(linkedList.print());
		linkedList.pop();
		console.log(linkedList.print());
		linkedList.pop();
		console.log(linkedList.print());
		linkedList.pop();
		console.log(linkedList.print());
		linkedList.pop();
		console.log(linkedList.print());
		linkedList.pop();
		console.log(linkedList.print());
		linkedList.pop();
		console.log(linkedList.print());
		linkedList.pop();
		console.log(linkedList.print());
		linkedList.pop();
		
		expect(linkedList.pop()).toEqual(undefined);
		expect(linkedList.print()).toEqual('undefined');
	});
});