let testGames = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]

    function points(games) {
        return (
          games
            // split the game score into two separate values
            .map((game) => game.split(":"))
      
            // calculate the points for this game with a ternary operator
            .map((score) => (score[0] > score[1] ? 3 : score[0] === score[1] ? 1 : 0))
      
            // calculate the sum of all games
            .reduce((acc, cur) => acc + cur, 0)
        );
    
    
  }


  points(testGames)