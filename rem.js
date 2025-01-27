window.addEventListener('load', initialize)

function initialize() {
    document.getElementById('formSubmit').addEventListener('submit', onsubmitdo)

    function onsubmitdo(e) {
        e.preventDefault();
        var Date = document.getElementById('Date').value;
        var Time= document.getElementById('Time').value;
        var Event = document.getElementById('Event').value;
        var allvaluesinarray = [];
        // create object
        keeper = {
            keepDate: Date,
            keepTime: Time,
            keepEvent: Event,
        }
        if (localStorage.getItem('hold') === null) {
            // object pushed to array
            allvaluesinarray.push(keeper);
            // send the array to localStorage as object

            localStorage.setItem('hold', JSON.stringify(allvaluesinarray));

        } else {
            // if its not null, the fetch all localstorage values and then insert again
            allstoredvaluesinArrayForm = JSON.parse(localStorage.getItem('hold'));
            allstoredvaluesinArrayForm.push(keeper);
            localStorage.setItem('hold', JSON.stringify(allstoredvaluesinArrayForm));


        }

        document.getElementById('Date').value = '';
        document.getElementById('Time').value = '';
        document.getElementById('Event').value = '';
        FetchAllValuesDisplayTable();
    }


function FetchAllValuesDisplayTable() {
    arrayFormated = [];
    output = '';
    arrayFormated = JSON.parse(localStorage.getItem('hold'));
    for (var i = 0; i < arrayFormated.length; i++) {


        output += `
            <tr class='bg-default'>
            <td>` + arrayFormated[i].keepDate + `</td>
            <td>` + arrayFormated[i].keepTime + `</td>
            <td>` + arrayFormated[i].keepEvent + `</td>
            </tr>
        `;

    
    }
    document.getElementById('dynamicFill').innerHTML = output;
    }

  
}