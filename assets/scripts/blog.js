let eleID = (id) => {
    return document.getElementById(id);
}
let set_style = (elem,styles)=>{
    Object.assign(elem.style,styles)
}

window.addEventListener('load',()=>{
    let loader = eleID('loader');
    let body = eleID('body');
    setTimeout(()=>{
        set_style(body,{display:'block'});
        loader.style.animation = 'fadeaway .8s ease';
        set_style(loader,{animation:'fadeaway .8s ease'});
        setTimeout(()=>{
            set_style(loader,{display:'none'});
            let greetAnim= ()=>{
                let greet = eleID('greetings');
                set_style(greet,{animation:'greetInUp .75s',opacity:.6});
            }
            greetAnim();
        },800);
    },1300);
});


const header = eleID('header');
const nav = eleID('nav');

window.addEventListener('scroll', () => {
    
    let navAnim = () => {
        let headbound = header.getBoundingClientRect();
        if (headbound.top < -120)
            set_style(nav,{color:'white',backgroundColor:'black',boxShadow:'0 0 0 black'});
        else
            set_style(nav,{color:'black',backgroundColor:'transparent',boxShadow:'0 6px 20px black'});
    }
    let blogAnim = ()=>{
        let blogs = document.getElementsByClassName('blog');
        for(var i = 0;i<blogs.length;i++)
        {
            let blog = blogs[i].getBoundingClientRect();

            if(blog.top <= window.innerHeight*.75 )
            {
                set_style(blogs[i],{opacity:1,animation:'fadeInUp .75s'})
            }
        }
    }
    let subsAnim = ()=>{
        let subscribe = eleID('subscribe');
        let sb_txt = eleID('sb_txt');
        let mail = eleID('mail');
        let submit = eleID('submit');
        let sb_bound = subscribe.getBoundingClientRect();

        if(sb_bound.top >= 0 && sb_bound.bottom <= (window.innerHeight || document.documentElement.clientHeight))
        {
            set_style(sb_txt,{opacity:1,animation:'bounceIn .7s'});
            set_style(mail,{opacity:1,animation:'bounceIn .7s'});
            set_style(submit,{opacity:1,animation:'bounceIn .7s'});
        }
    }

    blogAnim();
    navAnim();
    subsAnim();
    
});
