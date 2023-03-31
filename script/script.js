$(document).ready(function(){
  $('.button_2').click(function() {
    $('.all').css('position', 'absolute');
    $('.screan2').css('display', 'block');
    $('.all').css('width', '100vw');
    $('.all').css('height', '206vw');
    $('.all').css('overflow', 'visible');
    $('.screan').css('display', 'none');
  });

  $(".cat").click(function() {
    $( ".all" ).css( "display", 'none' );
    $( ".victory" ).css( "display", 'block' );
  });

    let banana = 0;

  $( function() {
    $( ".drag1" ).draggable();
    $( ".hand" ).droppable({
      drop: function( event, ui ) {
        banana+=1;
        if (banana == 5){
          $( '.but3' ).css( "opacity", '1' );
        }
      }
    });
  } );

  $( function() {
    $( ".drag2" ).draggable();
    $( ".hand" ).droppable({
      drop: function( event, ui ) {
        banana+=1;
        if (banana == 5){
          $( '.but3' ).css( "opacity", '1' );
        }
      }
    });
  } );

  $( function() {
    $( ".drag3" ).draggable();
    $( ".hand" ).droppable({
      drop: function( event, ui ) {
        banana+=1;
        if (banana == 5){
          $( '.but3' ).css( "opacity", '1' );
        }
      }
    });
  } );

  $( function() {
    $( ".drag4" ).draggable();
    $( ".hand" ).droppable({
      drop: function( event, ui ) {
        banana+=1;
        if (banana == 5){
          $( '.but3' ).css( "opacity", '1' );
        }
      }
    });
  } );

  $( function() {
    $( ".drag5" ).draggable();
    $( ".hand" ).droppable({
      drop: function( event, ui ) {
        banana+=1;
        if (banana == 5){
          $( '.but3' ).css( "opacity", '1' );
        }
      }
    });
  } );

  let cocosik = 0;
  $( function() {
    $( ".dranik1" ).draggable();
    $( ".draniki" ).droppable({
      drop: function( event, ui ) {
        cocosik+=1;
        if (cocosik == 5){
          $( '.but5' ).css( "opacity", '1' );
        }
      }
    });
  } );
  $( function() {
    $( ".dranik4" ).draggable();
    $( ".draniki" ).droppable({
      drop: function( event, ui ) {
        cocosik+=1;
        if (cocosik == 5){
          $( '.but5' ).css( "opacity", '1' );
        }
      }
    });
  } );
  $( function() {
    $( ".dranik5" ).draggable();
    $( ".draniki" ).droppable({
      drop: function( event, ui ) {
        cocosik+=1;
        if (cocosik == 5){
          $( '.but5' ).css( "opacity", '1' );
        }
      }
    });
  } );
  $( function() {
    $( ".dranik6" ).draggable();
    $( ".draniki" ).droppable({
      drop: function( event, ui ) {
        cocosik+=1;
        if (cocosik == 5){
          $( '.but5' ).css( "opacity", '1' );
        }
      }
    });
  } );
  $( function() {
    $( ".dranik7" ).draggable();
    $( ".draniki" ).droppable({
      drop: function( event, ui ) {
        cocosik+=1;
        if (cocosik == 5){
          $( '.but5' ).css( "opacity", '1' );
        }
      }
    });
  } );

  $('.plate').click(function() {
    $('.but4').css('opacity', '1');
  });

  $('.b6').click(function() {
    $('.but6').css('opacity', '1');
  });

  $('.b3').click(function() {
    $('.but6').css('opacity', '1');
  });

});
