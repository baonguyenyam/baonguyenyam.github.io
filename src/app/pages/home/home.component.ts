import { Component, Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { InfoComponent } from '../../components/info/info.component';
import { MyComponent } from '../../components/my/my.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InfoComponent, MyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) { }
  title = 'Nguyen App';

  public ngOnInit() {
    let script = this._renderer2.createElement('script'); 
    script.type = `text/javascript`;
    script.text = `
      function elmOnScroll() {
        var scroll = document.documentElement.scrollTop || document.body.scrollTop;
        var elms = document.querySelectorAll("#home-list-action-list .item");
        var whp = window.innerHeight / 5;
        elms.forEach(function (elm, index) {
            var elmTop = elm.getBoundingClientRect().top;
            var elmHeight = elm.getBoundingClientRect().height;
            var elmBottom = elmTop + elmHeight;
            if ((elmTop < window.innerHeight && elmTop > 0) || (elmBottom > 0 && elmBottom < window.innerHeight)) {
                var qs = elm.getAttribute("data-class");
                elm.classList.add(qs);
                if ((elmTop + 200) >= (window.innerHeight + scroll)) {
                    var opacity = 0.8 - ((elmTop + 200) - (window.innerHeight + scroll)) / 200;
                    elm.setAttribute("style", '--visible-y: ' + opacity + ';');
                } else {
                    elm.setAttribute("style", '--visible-y: 1');
                }
            } else {
                var qs = elm.getAttribute("data-class");
                // elm.classList.remove(qs);
            }
        })
      }

      function svgFullWidthHeight() {
        var svg = document.querySelector('#home-madelayout svg');
        var svgWidth = svg.getBoundingClientRect().width;
        var svgHeight = svg.getBoundingClientRect().height;
        var svgRatio = svgWidth / svgHeight;
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var windowRatio = windowWidth / windowHeight;
        if (windowRatio > svgRatio) {
            svg.style.width = '100%';
            svg.style.height = 'auto';
        } else {
            svg.style.width = 'auto';
            svg.style.height = '100%';
        }
        var svgWidth = svg.getBoundingClientRect().width;
        var stranslateX = (windowWidth - svgWidth) / 2;
        svg.style.transform = 'translateX(' + stranslateX + 'px)';
        if (svgHeight > windowHeight) {
            var svgTop = svg.getBoundingClientRect().top;
            var stranslateY = (svgHeight - windowHeight + 40) / 2;
            document.getElementById('home-madelayout').style.transform = 'translateY(-' + stranslateY + 'px)';
        }
      }
      var path = document.querySelectorAll('#home-madelayout svg path');
      path.forEach(function (path, index) {
        if (index === 0) {
            path.style.strokeDasharray = 8500;
            path.style.strokeDashoffset = 8500;
            path.style.stroke = '#fff';
            path.getBoundingClientRect();
            path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 4s ease-in-out';
            path.style.strokeDashoffset = '0';
        } else {
            setTimeout(function () {
                if (index <= 16) {
                    let m = (index / 65) * 1.6;
                    path.style.opacity = 1;
                    path.style.stroke = 'rgba(255,255,244,' + m + ')';
                } else {
                    let m = 1 - (index / 33) * 1.1;
                    path.style.opacity = 1;
                    path.style.stroke = 'rgba(255,255,244,' + m + ')';
                }
            }, (1800 + (index * 100)));
        }
      });
      svgFullWidthHeight()
      setTimeout(function () {
          elmOnScroll();
      }, 5500);
      window.onscroll = function () {
          elmOnScroll();
      };
      var Winscroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (Winscroll > 100) {
          elmOnScroll();
      }

    `;
    
    this._renderer2.appendChild(this._document.body, script);
  }

}
