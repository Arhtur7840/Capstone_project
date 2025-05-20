# HTML part of my Capstone Project

## Codes that correspond to rubric
- Doctype and HTML structure:
```
    <!DOCTYPE html>
```
- lang attribute:
```
    <html lang="en">
```
- Meta tags:
```
    <meta charset="UTF-8">
```
- Semantic elements:
```
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Capstone Project </title>
        <style>
            /* Beggining of the web app */
            :root {
                font-size: 18px;
            }
            body {
                margin: unset;
                background-color: antiquewhite;
                color: gray;
            }

            /* The main body of the web app */
            #frame {
                background-color: brown;
                width: 80%;
                height: fit-content;
                margin: 0 10% 0 10%;
            }

            /* The header of the web app*/
            #header {
                display: flex;
                flex-direction: row;
            }
            #firsthalf {
                display: flex;
                flex-direction: row;
                justify-content: start;
                align-items: center;
                width: 45%;
                padding: 1rem 1rem 1rem 1rem;
            }
            #secondhalf {
                display: flex;
                flex-direction: row;
                justify-content: end;
                align-items: center;
                width: 55%;
                padding: 1rem 1rem 1rem 1rem;
            }
            #insert {
                width: 50%;
            }
            #searchBtn {
                background-color: green;
                border: 0.5 darkgreen solid;
                border-radius: 0.5rem;
                margin-left: 2%;
            }

            /* The items of the web app */
            #table {
                background-color: white;
                display: grid;
                grid-template-columns: auto auto auto;
                justify-content: space-evenly;
                width: 100%;
                height: fit-content;
                padding: 1rem 0rem 1rem 0rem;
            }
            #table a{
                color: black;
                text-decoration: none;
            }
            .item {
                background-color: burlywood;
                text-align: center;
                align-content: center;
                width: 10rem;
                height: 5rem;
                margin: 1rem 1rem 1rem 1rem;
            }

            /* Search history */
            #searchHistory {
                color: white;
                text-align: center;
                justify-content: center;
                width: 100%;
                height: fit-content;
                padding: 0.67rem 0 0.67rem 0;
            }

            /* The time spent in the web site */
            .timespent {
                color: white;
                text-align: center;
                justify-content: center;
                width: 100%;
                height: fit-content;
                padding: 0.67rem 0 0.67rem 0;
            }
        </style>
    </head>
```
- Headings structure:
```
    <h2>
        Burger king
    </h2>
```
- Alt text for images:
```
    <img src="Logo.png" alt="Logo" width="50px" height="75px"/>
```
- Form structure
```
    <div id="secondhalf">
        <input type="text" id="insert" placeholder="Restaurants to go?"/>
    </div>
```
- Button & Input elements:
```
    <input type="text" id="insert" placeholder="Restaurants to go?"/>
```
- Anchor tags:
```
    <a href="https://www.bk.com/" target="_self">
        <div class="item">
            <h2>
                Burger king
            </h2>
        </div>
    </a>
```
- External JS:
```
    <script defer src="Capstone_project.js">
    </script>
```
- Responsive META:
```
    <div id="frame">
        <div id="header">
            <div id="firsthalf">
                <img src="Logo.png" alt="Logo" width="50px" height="75px"/>
                <p>estaurant Searcher</p>
            </div>
            <div id="secondhalf">
                <input type="text" id="insert" placeholder="Restaurants to go?"/>
            </div>
        </div>
        <div id="table">
            <a href="https://www.bk.com/" target="_self">
                <div class="item">
                    <h2>
                        Burger king
                    </h2>
                </div>
            </a>
            <a href="https://www.mcdonalds.com/us/en-us.html" target="_self">
                <div class="item">
                    <h2>
                        McDonalds
                    </h2>
                </div>
            </a>
            <a href="https://www.applebees.com/en/menu?utm_medium=cpc&utm_source=Google&utm_content=cpc&utm_campaign=Menu&&&&&gad_source=1&gad_campaignid=11287089015&gbraid=0AAAAADhTe4Vn-tg3qHYQRRQ5zjeDpUPx-&gclid=Cj0KCQjwxJvBBhDuARIsAGUgNfgZ8QVL0Xlb_aJWpXLcuE_Ny7tBdaBPwXaI4Xflk8CbU9ERomg3MqkaAt07EALw_wcB&gclsrc=aw.ds" target="_self">
                <div class="item">
                    <h2>
                        Apple Bees
                    </h2>
                </div>
            </a>
            <a href="https://www.tacobell.com/food/deals-and-combos/5-piece-crispy-chicken-nuggets?utm_source=google&utm_medium=paid-social&utm_campaign=chickennuggets&utm_term=launch&gad_source=1&gad_campaignid=22006826291&gbraid=0AAAAADxBTsKImuYq7gOD5zNoXT2eT3sQF&gclid=Cj0KCQjwxJvBBhDuARIsAGUgNfi3_3F43k-3uhSoZsN5qGNmn_-ZdiRVz5yc2CQx_w_g-TTXCLzauYIaAl3dEALw_wcB&gclsrc=aw.dsl" target="_self">
                <div class="item">
                    <h2>
                        Taco Bell
                    </h2>
                </div>
            </a>
            <a href="https://www.texasroadhouse.com/" target="_self">
                <div class="item">
                    <h2>
                        Texas Road House
                    </h2>
                </div>
            </a>
            <a href="https://www.outback.com/" target="_self">
                <div class="item">
                    <h2>
                        Outback
                    </h2>
                </div>
            </a>
            <a href="https://whataburger.com/home?gad_source=1&gad_campaignid=22158144955&gbraid=0aaaaa-pqy6_mn5g18nnr4o08xichrg8b1&gclid=cj0kcqjwxjvbbhduarisagugnfiog9h1v0t8klcmuzjhnbq5609r8pchix167rbvtpvjqqzv-w3z36caahrcealw_wcb" target="_self">
                <div class="item">
                    <h2>
                        Whataburger
                    </h2>
                </div>
            </a>
            <a href="https://www.wendys.com/" target="_self">
                <div class="item">
                    <h2>
                        Wendy's
                    </h2>
                </div>
            </a>
            <a href="https://www.dominos.com/en/?utm_campaign=12899946141|c|GG|Google_BR_Brand_Top&utm_source=Google&utm_medium=p_search&utm_content=kwd-24470291|12899946141|122001614375&utm_term=dominos&matchtype=e&gad_source=1&gad_campaignid=12899946141&gbraid=0AAAAADeMJnDhr7ib7upsVWlwN9GBVnMeU&gclid=Cj0KCQjwxJvBBhDuARIsAGUgNfjna2udeLo8MXS7_h_pRHYyXFTzIYkT_qetSlrkLYLljcYiwu7f0-0aAq6HEALw_wcB" target="_self">
                <div class="item">
                    <h2>
                        Dominos
                    </h2>
                </div>
            </a>
            <a href="https://www.dominos.com/en/?utm_campaign=12899946141|c|GG|Google_BR_Brand_Top&utm_source=Google&utm_medium=p_search&utm_content=kwd-24470291|12899946141|122001614375&utm_term=dominos&matchtype=e&gad_source=1&gad_campaignid=12899946141&gbraid=0AAAAADeMJnDhr7ib7upsVWlwN9GBVnMeU&gclid=Cj0KCQjwxJvBBhDuARIsAGUgNfjna2udeLo8MXS7_h_pRHYyXFTzIYkT_qetSlrkLYLljcYiwu7f0-0aAq6HEALw_wcB" target="_self">
                <div class="item">
                    <h2>
                        Culver's
                    </h2>
                </div>
            </a>
            <a href="https://www.pizzahut.com/deals?ds_rl=1149043&gad_source=1&gad_campaignid=122485240&gbraid=0AAAAADyJNr151vTHKCuYEArMNy5lFy8M4&gclid=Cj0KCQjwxJvBBhDuARIsAGUgNfgtfE4wDyCqndG9IhJYJNCmYGaPWhAA34RGdX3orz0-lh0norXYZf4aAoptEALw_wcB&gclsrc=aw.ds" target="_self">
                <div class="item">
                    <h2>
                        Pizza Hut
                    </h2>
                </div>
            </a>
            <a href="https://www.pandaexpress.com/?showMenu=true&gad_source=1&gad_campaignid=22311479986&gbraid=0AAAAA-n8EL32n7e6vj3Um2PWr_4ZTC4Gn&gclid=Cj0KCQjwxJvBBhDuARIsAGUgNfjQ-2UyBvDUsNWSlGNUmAf0nCoIrwVyobn-uPO8DbKyyXKzXcfR-H4aArPaEALw_wcB" target="_self">
                <div class="item">
                    <h2>
                        Panda Express
                    </h2>
                </div>
            </a>
            <a href="https://www.sonicdrivein.com/menu/?gad_source=1&gad_campaignid=1541290223&gbraid=0AAAAADlCNo4Q0N0NTgljgkTb9b7Qo4pHN&gclid=Cj0KCQjwxJvBBhDuARIsAGUgNfhxyAj7N7UmfoS4qtt2c6s6FReW7LX3UF-Mk18JcKVC08gfizsR63caAoDUEALw_wcB" target="_self">
                <div class="item">
                    <h2>
                        Sonic
                    </h2>
                </div>
            </a>
            <a href="https://filibertos.com/" target="_self">
                <div class="item">
                    <h2>
                        Fillibertos
                    </h2>
                </div>
            </a>
            <a href="https://www.google.com/maps/search/Restaurants/" target="_self">
                <div class="item">
                    <h2>
                        Others...
                    </h2>
                </div>
            </a>
        </div>
        <div id="searchHistory">

        </div>
        <div class="timespent">
            <p id="timeSpent">
                Your time spent is : 00:00:00
            </p>
        </div>
    </div>
```
- Comments:
```
    <!-- This is the internal CSS of the HTML -->
```
- Indentation:
```
    <div id="header">

        <div id="firsthalf">
            <img src="Logo.png" alt="Logo" width="50px" height="75px"/>
            <p>estaurant Searcher</p>
        </div>

        <div id="secondhalf">
            <input type="text" id="insert" placeholder="Restaurants to go?"/>
        </div>

    </div>
```

# CSS part of the Capstone Project

## Codes that correspond to the rubric
- Uses CSS variables:
```
    :root {
        font-size: 18px;
    }
```
- Organized CSS Structure:
```
    /* Beggining of the web app */
    :root {
        font-size: 18px;
    }
    body {
        margin: unset;
        background-color: antiquewhite;
        color: gray;
    }

    /* The main body of the web app */
    #frame {
        background-color: brown;
        width: 80%;
        height: fit-content;
        margin: 0 10% 0 10%;
    }
```
- Responsive design:
```
    #header {
        display: flex;
        flex-direction: row;
    }
    #firsthalf {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        width: 45%;
        padding: 1rem 1rem 1rem 1rem;
    }
```
- Color scheme:
```
    body {
        margin: unset;
        background-color: antiquewhite;
        color: gray;
    }
```
- FlexBox:
```
    #header {
        display: flex;
        flex-direction: row;
    }
```
- Input styling:
```
    #insert {
        width: 50%;
    }
    #searchBtn {
        background-color: green;
        border: 0.5 darkgreen solid;
        border-radius: 0.5rem;
        margin-left: 2%;
    }
```
- Component reusability:
```
    .item {
        background-color: burlywood;
        text-align: center;
        align-content: center;
        width: 10rem;
        height: 5rem;
        margin: 1rem 1rem 1rem 1rem;
    }
```
- Hover effects:
```
    .item:hover {
        background-color: red;
    }
```
- Layout containers:
```
    /* The main body of the web app */
    #frame {
        background-color: brown;
        width: 80%;
        height: fit-content;
        margin: 0 10% 0 10%;
    }
```
- Utility classes:
```
    #searchHistory {
        color: white;
        text-align: center;
        justify-content: center;
        width: 100%;
        height: fit-content;
        padding: 0.67rem 0 0.67rem 0;
    }
```
- Naming Conventions:
```
    /* The items of the web app */
    #table {
        background-color: white;
        display: grid;
        grid-template-columns: auto auto auto;
        justify-content: space-evenly;
        width: 100%;
        height: fit-content;
        padding: 1rem 0rem 1rem 0rem;
    }
    #table a{
        color: black;
        text-decoration: none;
    }
    .item {
        background-color: burlywood;
        text-align: center;
        align-content: center;
        width: 10rem;
        height: 5rem;
        margin: 1rem 1rem 1rem 1rem;
    }
    .item:hover {
        background-color: red;
    }
```

# JavaScript part of the Capstone Project

## Codes that correspond to the rubric
- Variable naming:
```
    const searchInput = document.getElementById('insert');
```
- Function naming:
```
    function saveSearchTerm(searchTerm)
```
- Array usage:
```
    let daysofweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
```
- JSON handling:
```
    searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
```
- Web Storage:
```
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
```
- Getting information:
```
    const searchTerm = searchInput.value.toLowerCase();
```
- Cookie with exipring date:
```
    document.cookie = `name=${searchHistory.length -1 };Expires=${currentWD + 7} ${new Date().getDay} ${new Date().getMonth() + 1} ${new Date().getFullYear()} 12:00:00 UTC`;
```
- DOM manipulation:
```
  document.getElementById("searchHistory").innerHTML = `
    <div>
      <p>
        ${searchHistory}
      </p>
    </div>
  `;
```
- CSS Manipulation via JS:
```
    if (text.includes(searchTerm)) {
        item.style.display = 'block';
    }
    else {
        item.style.display = 'none';
    }
```
- Comments:
```
    // This is what upadates the searched items everytime you type something in
```
- Time and Date object:
```
    let today = new Date().getDay();
```
- addEventListener:
```
addEventListener('keydown', function(e) {
    if(e.key === "Enter") {
        const searchTerm = searchInput.value.toLowerCase();
        saveSearchTerm(searchTerm);
    }
    });
```
- Real time search:
```
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        items.forEach(item => { 
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
        });
    });
```
- Crud functionality:
```
    searchHistory.push(searchTerm);
```