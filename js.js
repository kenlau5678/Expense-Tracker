var balance_text = document.querySelector('#balance')
var income_text = document.querySelector('.income .data')
var expense_text = document.querySelector('.expense .data')

 localStorage.setItem("income", '$0.00')
localStorage.setItem('balance', '$0.00')
localStorage.setItem('expense', '$0.00') 
/* localStorage.setItem('deletes', '')  */

var text = document.querySelector('.text')
var amount = document.querySelector('.amount')


var btn = document.querySelector('.button button')

var ul = document.querySelector('ul')



income_text.innerHTML = localStorage.getItem('income')
expense_text.innerHTML = localStorage.getItem('expense')
balance_text.innerHTML = localStorage.getItem('balance')

des = JSON.parse(localStorage.getItem('deletes'))

deslength = getHsonLength(des)

for (var i = 0; i < deslength; i++) {
    console.log(des[i]);
    var value_i = des[i].data.toFixed(2)
    if (des[i].data >= 0) {

        label = '<div class="label green_border"><div class="left">' + des[i].text + '</div><div class="delete">X</div><div class="right">+' + value_i + '</div></div>'
        var li = document.createElement('li')
        li.innerHTML = label;
    } else {

        label = '<div class="label red_border"><div class="left">' + des[i].text + '</div><div class="delete">X</div><div class="right">' + value_i + '</div></div>'
        var li = document.createElement('li')
        li.innerHTML = label;
    }
    ul.appendChild(li)
    
}

function getHsonLength(json) {
    var jsonLength = 0;
    for (var i in json) {
        jsonLength++;
    }
    return jsonLength;
}

btn.addEventListener('click', function() {
    var balance = parseFloat(document.querySelector('#balance').innerHTML.slice(1))
    if (text.value == '' || amount.value == '') {
        alert('Please add a text and amount')
        return false
    } else {


        if (parseInt(amount.value) >= 0) {
            var income = document.querySelector('.income .data').innerHTML.slice(1)


            value = parseFloat(amount.value).toFixed(2)
            label = '<div class="label green_border"><div class="left">' + text.value + '</div><div class="delete">X</div><div class="right">+' + value + '</div></div>'
            var li = document.createElement('li')
            li.innerHTML = label;


            income = parseFloat(income) + parseFloat(amount.value)
            balance += parseFloat(amount.value)

            income_text.innerHTML = '$' + income.toFixed(2);

            balance_text.innerHTML = '$' + balance.toFixed(2);

            localStorage.setItem("income", income_text.innerHTML)
            localStorage.setItem('balance', balance_text.innerHTML)


        } else {
            var expense = document.querySelector('.expense .data').innerHTML.slice(1)
            console.log(expense)
            value = parseFloat(amount.value).toFixed(2)
            console.log(value);
            label = '<div class="label red_border"><div class="left">' + text.value + '</div><div class="delete">X</div><div class="right">' + value + '</div></div>'
            var li = document.createElement('li')
            li.innerHTML = label;



            expense = parseFloat(-expense) + parseFloat(amount.value)
                /*             console.log(expense);
                 */

            balance += parseFloat(amount.value)
                /*             console.log(balance); */

            expense = (-expense).toFixed(2)
            expense_text.innerHTML = '$' + expense



            balance = balance.toFixed(2);
            balance_text.innerHTML = '$' + balance

            localStorage.setItem("expense", expense_text.innerHTML)
            localStorage.setItem('balance', balance_text.innerHTML)
        }


        ul.appendChild(li)


        var deletes = document.querySelectorAll('.delete');

        for (var i = 0; i < deletes.length; i++) {
            deletes[deletes.length - 1].data = parseInt(amount.value)
            deletes[deletes.length - 1].text = text.value
            deletes[i].onclick = function() {
                console.log(this.parentNode);
                ul.removeChild(this.parentNode.parentNode);

                if (this.data >= 0) {

                    var income_2 = document.querySelector('.income .data').innerHTML.slice(1)
                    count = parseFloat(income_2)

                    income_text.innerHTML = '$' + (count - this.data).toFixed(2)

                    var balance_data = parseFloat(document.querySelector('#balance').innerHTML.slice(1))
                    balance_text.innerHTML = '$' + (balance_data - this.data).toFixed(2)

                    localStorage.setItem("income", income_text.innerHTML)
                    localStorage.setItem('balance', balance_text.innerHTML)
                    var str = JSON.stringify(document.querySelectorAll('.delete'))
                    localStorage.setItem('deletes', str)


                } else {
                    var expense_2 = document.querySelector('.expense .data').innerHTML.slice(1)
                    count = parseFloat(expense_2)

                    expense_text.innerHTML = '$' + (count + this.data).toFixed(2)
                    var balance_data = parseFloat(document.querySelector('#balance').innerHTML.slice(1))
                    console.log(balance_data);
                    balance_text.innerHTML = '$' + (balance_data - this.data).toFixed(2)

                    localStorage.setItem("expense", expense_text.innerHTML)
                    localStorage.setItem('balance', balance_text.innerHTML)
                    var str = JSON.stringify(document.querySelectorAll('.delete'))
                    localStorage.setItem('deletes', str)
                }

            }
        }

        text.value = '';
        amount.value = '';


        var str = JSON.stringify(document.querySelectorAll('.delete'))
        localStorage.setItem('deletes', str)




    }




});
