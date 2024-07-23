fetch('js/projects.json')
.then(response => response.json())
       .then(data => displayProducts(data))
       .catch(error => console.error('حدث خطأ في استرجاع بيانات المنتجات:', error));

   function displayProducts(projects) {
       var projectsBoxs = document.getElementById('projects');

       projects.forEach(function (project) {
           projectsBoxs.innerHTML += ` 
           <div id="${project.id}" class="box js-tilt ${project.catgery} all" data-tilt data-tilt-glare data-tilt-max-glare="0.4">
                   <a href="${project.link}" target="_blank">
                       <img src="${project.img}" alt="">

                       <div class="content">
                           <h3>${project.name}</h3>
                           <i class="fa-solid fa-up-right-from-square"></i>
                       </div>
                   </a>
               </div>
       `;
       });
   }
  
  
  
  
  
  
  // menu projects
  let switcherLis = document.querySelectorAll('.menuprojects ul li');


  switcherLis.forEach((li) => {
    li.addEventListener("click",removeAcitvee)
    li.addEventListener("click",manageImgs)

  })
function removeAcitvee(){
    switcherLis.forEach((li) => {
        li.classList.remove("active")
        this.classList.add("active")
    })
   
}

// mange imgs

function manageImgs() {
    let imgProjectMenu = document.querySelectorAll('.projects .box');
    imgProjectMenu.forEach((img) => {
        img.classList.add("active")

        setTimeout(function() {
            img.style.display = 'none';
        }, 300);
      
    });
    document.querySelectorAll(this.dataset.cat).forEach((elmsimg) => {
      
        setTimeout(function() {
            elmsimg.classList.remove("active")
            elmsimg.style.display = 'block';
        }, 310);

    });
    
}

/* cursor */

const cursorOutline = document.querySelector("[data-cursor-outline]")


window.addEventListener("mousemove", function(e){
   const posX = e.clientX; 
   const posY = e.clientY; 


   cursorOutline.style.left = `${posX}px`;
   cursorOutline.style.top = `${posY}px`;

   cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
   },{ duration:300, fill: "forwards"});
})




/* cursor */

var typedTextSpan = document.querySelector(".typed_text");

var textArray = ["Web Developer", "Freelancer", "Youtuber"];
var textArrayIndex = 0;
var charIndex = 0;

function typeNextChar() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent = typedTextSpan.textContent.slice(0, charIndex) + textArray[textArrayIndex][charIndex] + typedTextSpan.textContent.slice(charIndex + 1);
        charIndex++;
        setTimeout(typeNextChar, 100);
        
    } else {
        removeExtraCharacters(); // حذف الحروف الزائدة بعد انتهاء تغيير الكلمة
        setTimeout(changeText, 3000); // ينتظر 4 ثوانٍ بعد تغيير الكلمة
    }
}

function removeExtraCharacters() {
    var newText = textArray[textArrayIndex];
    if (typedTextSpan.textContent.length > newText.length) {
        var extraCharacters = typedTextSpan.textContent.length - newText.length;
        typedTextSpan.textContent = typedTextSpan.textContent.slice(0, -extraCharacters);
    }
}

function changeText() {
    textArrayIndex = (textArrayIndex + 1) % textArray.length; // التحقق من تجاوز الفهرس لتجنب الأخطاء
    charIndex = 0; // إعادة تعيين فهرس الحرف للبدء من الصفر مرة أخرى
    setTimeout(typeNextChar, 1); // يبدأ عرض الحروف الجديدة بشكل تدريجي
}

window.onload = function () {
    setTimeout(typeNextChar, 1);
};

  // start nav scroll active color

  const sectionAll = document.querySelectorAll('section[id]');
  window.addEventListener('scroll',()=>{
    const scrollY = window.pageYOffset;
    sectionAll.forEach((current)=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 550;
        const sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('ul a[href*="' + sectionId + '"] li').classList.add('active')
        }else{
            document.querySelector('ul a[href*="' + sectionId + '"] li').classList.remove('active')
        }
    })
  })


  // particles js 

  // استيراد ملف بارتيكل جي أس باستخدام fetch
fetch('js/particles.json')
.then(response => response.json())
.then(options => {
  // تحميل الخيارات باستخدام الملف الذي تم جلبه
  tsParticles.load("tsparticles", options);
})
.catch(error => console.error('حدث خطأ أثناء جلب ملف بارتيكل جي أس:', error));




window.addEventListener("load", () => {
    document.getElementById("preloader").classList.add("active")
  });