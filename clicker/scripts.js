            //Константы
    const button = document.getElementById('clBtn');
    const counterDisplay = document.getElementById('clcount');
    const clmultiple = document.getElementById('buy-cl-multiple');
    const multipleCounter = document.getElementById('multipleCounter');
    const clmultipleX10 = document.getElementById('buy-cl-multiple-x10');
    const multiplePriceCounter = document.getElementById('multiplePriceCounter');
    const clmultipleX100 = document.getElementById('buy-cl-multiple-x100');
    const clmultipleX1000 = document.getElementById('buy-cl-multiple-x1000');
            // Летки
    let multiplePrice = 5;
    let clLvl = 1;
    let clicks = 0;

            //Еже секундные проверки и не только проверки
         
            if (clicks >= multiplePrice) {
                clmultiple.style.backgroundColor = "light green"
            }
       
           

    multiplePriceCounter.textContent = multiplePrice;

            //Функции
    // function upradeBuy(price, btn, PriceCounter, lvl){



    // }




    
  document.getElementById("clcount").textContent = clicks
            // Скрипты



    clmultipleX10.addEventListener('mouseover',() => {
        multiplePriceCounter.textContent = multiplePrice*10


    })
    clmultipleX10.addEventListener('mouseout',() => {
        multiplePriceCounter.textContent = multiplePrice


    })

    clmultipleX100.addEventListener('mouseover',() => {
        multiplePriceCounter.textContent = multiplePrice*100


    })
    clmultipleX100.addEventListener('mouseout',() => {
        multiplePriceCounter.textContent = multiplePrice


    })
    clmultipleX1000.addEventListener('mouseover',() => {
        multiplePriceCounter.textContent = multiplePrice*1000


    })
    clmultipleX1000.addEventListener('mouseout',() => {
        multiplePriceCounter.textContent = multiplePrice


    })
  button.addEventListener ("click", () => {
  // Увеличиваем переменную на 1
  clicks = clicks + clLvl;
  // Обновляем текст на странице

  if (clicks >= multiplePrice) {
                clmultiple.style.backgroundColor = "rgb(6, 202, 32)"
            }
      if (clicks >= multiplePrice*10) {
                    clmultipleX10.style.backgroundColor = "rgb(6, 202, 32)"
               }
            if (clicks >= multiplePrice*100) {
                clmultipleX100.style.backgroundColor = "rgb(6, 202, 32)"
            }
                if (clicks >= multiplePrice*1000) {
                    clmultipleX1000.style.backgroundColor = "rgb(6, 202, 32)"
                }
  counterDisplay.textContent = clicks; })
    clmultiple.addEventListener ("click", () =>  {
        if (clicks >= multiplePrice ) {
            clicks = clicks - multiplePrice;
            clLvl = clLvl + 1
                multiplePrice += 5
            counterDisplay.textContent = clicks;
            multiplePriceCounter.textContent = multiplePrice;
            multipleCounter.textContent = clLvl;
            
                



            }
        })
        clmultipleX10.addEventListener ("click", () =>  {
        if (clicks >= multiplePrice*10 ) {
            clicks = clicks - multiplePrice*10;
            clLvl = clLvl + 10
            multiplePrice += 5*10
            counterDisplay.textContent = clicks;
            multiplePriceCounter.textContent = multiplePrice;
            multipleCounter.textContent = clLvl;
            
                



            }
        })
        clmultipleX100.addEventListener ("click", () =>  {
        if (clicks >= multiplePrice*100 ) {
            clicks = clicks - multiplePrice*100;
            clLvl = clLvl + 100
            multiplePrice += 5*100
            counterDisplay.textContent = clicks;
            multiplePriceCounter.textContent = multiplePrice;
            multipleCounter.textContent = clLvl;
            
                



            }
        })

        clmultipleX1000.addEventListener ("click", () =>  {
        if (clicks >= multiplePrice*1000 ) {
            clicks = clicks - multiplePrice*1000;
            clLvl = clLvl + 1000
            multiplePrice += 5+1000
            counterDisplay.textContent = clicks;
            multiplePriceCounter.textContent = multiplePrice;
            multipleCounter.textContent = clLvl;
            
                



            }
        })

            //Дипсик Говно
            //НЕ ТРОГАТЬ
  document.addEventListener('DOMContentLoaded', function() {
            const themeToggle = document.getElementById('theme-toggle');
            const themeIcon = themeToggle.querySelector('.theme-icon');
            const themeText = themeToggle.querySelector('.theme-text');
            
            // Загрузка темы
            const savedTheme = localStorage.getItem('theme');
            const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
                setDarkTheme();
            } else {
                setLightTheme();
            }

            // Обработчик клика
            themeToggle.addEventListener('click', function() {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                
                if (currentTheme === 'dark') {
                    setLightTheme();
                } else {
                    setDarkTheme();
                }
            });

            function setDarkTheme() {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeIcon.textContent = '☀️';
                themeText.textContent = 'Светлая тема';
                localStorage.setItem('theme', 'dark');
            }

            function setLightTheme() {
                document.documentElement.removeAttribute('data-theme');
                themeIcon.textContent = '🌙';
                themeText.textContent = 'Темная тема';
                localStorage.setItem('theme', 'light');
            }
        });