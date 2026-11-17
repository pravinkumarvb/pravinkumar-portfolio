import { Injectable, signal, computed } from '@angular/core';
import { PORTFOLIO_CONTENT, LanguageCode } from '../data/portfolio.data';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly initialLang = (localStorage.getItem('preferred_lang') as LanguageCode) || 'en';

  readonly currentLang = signal<LanguageCode>(this.initialLang);
  readonly content = computed(() => PORTFOLIO_CONTENT[this.currentLang()]);

  toggleLanguage(): void {
    const next: LanguageCode = this.currentLang() === 'en' ? 'hi' : 'en';
    this.setLanguage(next);
  }

  setLanguage(lang: LanguageCode): void {
    this.currentLang.set(lang);
    localStorage.setItem('preferred_lang', lang);
  }
}