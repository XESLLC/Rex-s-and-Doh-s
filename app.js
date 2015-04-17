$(document).ready(function () {
  var player1 = []
  var player2 = []

  var turn = ["player1","player2"];
  var winner = false;

  Array.prototype.rotate = function( n ) {
  this.unshift.apply( this, this.splice( n, this.length ) )
  return this;
	};

  function combos(set, k) {
  var i, j, l;
  var combs = [];
  if (k == set.length) { combs.push(set);}

  if (k < set.length) {
    for (i = 0; i < set.length; i++) {
      set.rotate(i);
      var head1 = set[0];
      var jset = set.slice(1);
      	for (j = 0; j < jset.length; j++) {
          jset.rotate(j);
          var head2 = jset[0];
          var lset = jset.slice(1);
          for (l = 0; l < lset.length; l++) {
            lset.rotate(l);
            var head3 = lset[0];
       			combs.push([head1,head2,head3]);
            console.log(combs)

  	 };};};
	};

var total = 0;

 $.each(combs,function(index, value) {
		total = value.reduce(function(pv, cv) { return pv + cv; }, 0);

		if (total === 111 || total ===  222 ||total ===  333 ||total ===  6 ||total ===  60 ||total ===  600 ||total ===  321 ||total ===  123) {
      $(".winner").show();
      if (turn[0] === "player1") {
      	$(".rex_winner").show();
       }
       else {
       	$(".hommer_winner").show();
       }
    };
  })
 }

  $(".b1").click(function () {
    if (turn[0] === "player1") {
      $(".b1").toggleClass("rex");
      player1.push(1);
       combos(player1, 3);
    }
    else {
       $(".b1").toggleClass("doh");
       player2.push(1);
       combos(player2, 3);
    }
    turn.reverse();
  });

  $(".b2").click(function () {
    if (turn[0] === "player1") {
      $(".b2").toggleClass("rex");
      player1.push(2);
      combos(player1, 3);
    }
    else {
      $(".b2").toggleClass("doh");
      player2.push(2);
      combos(player2, 3);
    }
    turn.reverse();
  });

  $(".b3").click(function () {
    if (turn[0] === "player1") {
      $(".b3").toggleClass("rex");
      player1.push(3);
      combos(player1, 3);
    }
    else {
      $(".b3").toggleClass("doh");
      player2.push(3);
      combos(player2, 3);
    }
    turn.reverse();
  });

  $(".b10").click(function () {
    if (turn[0] === "player1") {
      $(".b10").toggleClass("rex");
      player1.push(10);
      combos(player1, 3);
    }
    else {
      $(".b10").toggleClass("doh");
      player2.push(10);
      combos(player2, 3);
    }
    turn.reverse();
  });

  $(".b20").click(function () {
    if (turn[0] === "player1") {
      $(".b20").toggleClass("rex");
      player1.push(20);
      combos(player1, 3);
    }
    else {
      $(".b20").toggleClass("doh");
      player2.push(20);
      combos(player2, 3);
    }
    turn.reverse();
  });

  $(".b30").click(function () {
    if (turn[0] === "player1") {
      $(".b30").toggleClass("rex");
      player1.push(30);
      combos(player1, 3);
    }
    else {
      $(".b30").toggleClass("doh");
      player2.push(30);
      combos(player2, 3);
    }
    turn.reverse();
  });

  $(".b100").click(function () {
    if (turn[0] === "player1") {
      $(".b100").toggleClass("rex");
      player1.push(100);
      combos(player1, 3);
    }
    else {
      $(".b100").toggleClass("doh");
      player2.push(100);
      combos(player2, 3);
    }
    turn.reverse();
  });

  $(".b200").click(function () {
    if (turn[0] === "player1") {
      $(".b200").toggleClass("rex");
      player1.push(200);
      combos(player1, 3);
    }
    else {
      $(".b200").toggleClass("doh");
      player2.push(200);
      combos(player2, 3);
    }
  turn.reverse();
  });

  $(".b300").click(function () {
    if (turn[0] === "player1") {
      $(".b300").toggleClass("rex");
      player1.push(300);
      combos(player1, 3);
    }
    else {
      $(".b300").toggleClass("doh");
      player2.push(300);
      combos(player2, 3);
    }
    turn.reverse();
  });

});
