$('.box1').animate({
  'width': '200px'
}, 2000, animation2);

function animation2() {
  $('.box2').animate({
    'width': '200px'
  }, 2000);
}

$('#go-button').click(function() {
  var username = $('#username').val();
   var greeting = 'Hello ' + username;
   $('#greeting').html(greeting);
})

// FORTUNE TELLER //

function compileFortune() {
  var fortune = 'You will be a ' + $('#job-title').val() + ' living in ' + $('#location').val() + ' with ' + $('#partner').val() + ' and ' + $('#num-kids').val() + ' kids.';
  $('#fortune-result').html(fortune);
}

$('#fortune-button').click(compileFortune);

// AGE CALCULATOR //

function calculateAge() {
  var birthDay = $('#birth-date').val().substring(8,10);
  var birthMonth = $('#birth-date').val().substring(5,7);
  var birthYear = $('#birth-date').val().substring(0,4);


  var currentTime = new Date()
  var year = currentTime.getFullYear();
  var month = currentTime.getMonth() + 1;
  var day = currentTime.getDate();
  console.log("The date is now: " + month + "/" + year);
  
  console.log("You were born in " + birthYear);
  
  var isBirthday = false;
  var age = year - birthYear;
  if (birthMonth > month){
      age--;
  } else if (birthMonth == month) {
    if (birthDay > day) {
      age--;
    } else if(birthDay == day) {
      isBirthday = true;
    }
  }

  var ageMsg = '';
  // var ageMsg = (birthMonth != month ? "You are " + age + " years old." : "You are either " + (age - 1) + " or " + age + " years old.");

  if (isBirthday) {
    ageMsg = '<p>Happy Birthday!</p>'
  }
  ageMsg += "You are " + age + " years old."

  $('#age-result').html(ageMsg);
  
}

$('#age-button').click(calculateAge);

// LIFETIME SUPPLY //

function calculateSupply() {
  var age = parseInt($('#supply-age').val(), 10);
  var maxAge = parseInt($('#max-age').val(), 10);
  var amtPerDay = parseInt($('#daily-snack').val(), 10);

  if (isNaN(age) || isNaN(maxAge) || isNaN(amtPerDay)) {
    $('#supply-result').html('Enter numbers genius.');
    return;
  }

  if (age >= maxAge) {
    $('#supply-result').html('You\'re already dead genius.');
    return;
  }

    console.log("You specified " + maxAge + " as your maximum age and " + age + " as your current age.");
    console.log("You indicated you eat " + amtPerDay + " pretzels a day.");
    var lifeSupply = Math.round(((maxAge - age) * 365) * amtPerDay);
    $('#supply-result').html("You will need " + lifeSupply + " snacks to supply yourself until death.");
    
}

$('#supply-button').click(calculateSupply);

// GRADE CALCULATOR

function assignGrade() {
  var nGrade = parseInt($('#grade-input').val(), 10);
  if (isNaN(nGrade)) {
    $('#grade-result').css('color', 'red').html('Enter a number genius. You fail.');
    return;
  }

  switch (true) {
    case (nGrade >= 90): 
      $('#grade-result').css('color', 'blue').html('Enter a number genius. You fail.');
      return;
    case (nGrade >= 80): return "B";
    case (nGrade >= 70): return "C";
    case (nGrade >= 60): return "D";
    default: return "F";
  }
}

$('#grade-button').click(assignGrade);









