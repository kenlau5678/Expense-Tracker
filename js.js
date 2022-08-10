var balance_text = document.querySelector('#balance')
var income_text = document.querySelector('.income .data')
var expense_text = document.querySelector('.expense .data')


var income = document.querySelector('.income .data').innerHTML.slice(1)
var expense = document.querySelector('.expense .data').innerHTML.slice(1)

var text = document.querySelector('.text')
var amount = document.querySelector('.amount')


var btn = document.querySelector('.button button')

var ul = document.querySelector('ul')


label = '<div class="label red_border"><div class="left"></div><div class="delete">X</div><div class="right"></div></div>'


btn.addEventListener('click', function() {
    var balance = parseFloat(document.querySelector('#balance').innerHTML.slice(1))
    if (text.value == '' || amount.value == '') {
        alert('Please add a text and amount')
        return false
    } else {


        if (parseInt(amount.value) >= 0) {

            value = parseFloat(amount.value).toFixed(2)
            label = '<div class="label green_border"><div class="left">' + text.value + '</div><div class="delete">X</div><div class="right">+' + value + '</div></div>'
            var li = document.createElement('li')
            li.innerHTML = label;

            income = parseFloat(income) + parseFloat(amount.value)
            balance += income
            income = income.toFixed(2);
            income_text.innerHTML = '$' + income

            balance = balance.toFixed(2);
            balance_text.innerHTML = '$' + balance


        } else {
            value = parseFloat(amount.value).toFixed(2)
            label = '<div class="label red_border"><div class="left">' + text.value + '</div><div class="delete">X</div><div class="right">' + value + '</div></div>'
            var li = document.createElement('li')
            li.innerHTML = label;
            expense = parseFloat(expense) + parseFloat(amount.value)
            balance += expense

            expense = (-expense).toFixed(2)
            expense_text.innerHTML = '$' + expense

            balance = balance.toFixed(2);
            balance_text.innerHTML = '$' + balance
        }


        ul.appendChild(li)
        text.value = '';
        amount.value = '';

        var deletes = document.querySelectorAll('.delete')
        console.log(deletes);
        for (var i = 0; i < deletes.length; i++) {
            deletes[i].onclick = function() {
                console.log(this.parentNode);
                ul.removeChild(this.parentNode.parentNode);
            }
        }


    }




});