import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-icon-provider',
  templateUrl: './icon-provider.component.html',
  styleUrls: ['./icon-provider.component.scss']
})

export class IconProviderComponent {

  link = '';
  svgCode = '';

  @Input() path = '';
  @Input() height = '14px';
  @Input() width = '14px'

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) { }

  sanitizeSVG(svgCode: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgCode);
  }

  fetchSVG() {
    this.http.get(this.link, { responseType: 'text' })
      .subscribe((svgContent) => {
        this.svgCode = svgContent;
      });
  }

  ngOnInit() {
    this.link = `/shared/assets/svg/${this.path}`;
    this.fetchSVG();
  }
}
