# Uživatelská příručka

## Úvod
Tato webová stránka slouží rodičům k získávání informací o průběhu dětského tábora. Najdete zde fotografie, články a můžete posílat vzkazy dětem.

---

## Navigace na webu

### Domovská stránka
- Zobrazuje aktuální informace
- Obsahuje odpočet do začátku tábora
- Zobrazuje aktuality

---

### O nás
- Zobrazuje aktuální informace
- Obsahuje odpočet do začátku tábora
- Zobrazuje aktuality

---

### Táborový zpravodaj
- Vyberte turnus
- Zvolte konkrétní den
- Zobrazí se článek a fotografie

---

### Soubory ke stažení
- Obsahuje důležité dokumenty
- Např. seznam věcí nebo informace pro rodiče

---

### Kontakty
- Obsahuje kontaktní údaje na vedení tábora

---

### Táborová pošta (odeslání vzkazu)

1. Otevřete stránku **Táborová pošta**
2. Vyplňte požadované údaje:
   - jméno dítěte
   - text zprávy
3. Odešlete formulář

Zpráva bude doručena a zobrazena na táborové nástěnce.

---

## Doporučení
- Web je možné používat na mobilu, tabletu i počítači
- Pro správné zobrazení doporučujeme aktuální prohlížeč

---

## Řešení problémů
- Pokud se stránka nenačte, zkuste ji obnovit
- Pokud se nedaří odeslat vzkaz, zkontrolujte vyplněné údaje
- V případě opakovaných potíží kontaktujte podporu na web@korinekldt.cz



# Administrátorská příručka

## Úvod
Administrace slouží ke správě obsahu webu – článků, fotografií, souborů a aktualit.

---

## Přihlášení

1. Otevřete administrační rozhraní
2. Zadejte přihlašovací údaje
3. Klikněte na „Přihlásit“

---

## Hlavní funkce administrace

### Nastavení
- Úprava odpočtu do začátku tábora
- Vytváření nových turnusů
- Vytváření uživatelů
- Mazání jednoho či všech vzkazů

---

### Správa článků

#### Vytvoření článku
- Vyberte turnus
- Zadejte:
   - název článku
   - číslo dne (0 = nezobrazuje se)
   - Obsah článku
- Uložte

#### Úprava článku
- Vyberte článek ze seznamu
- Proveďte změny
- Uložte

#### Smazání článku
- Vyberte článek podle nadpisu
- Klikněte na smazání

---

### Správa fotografií

#### Nahrání fotografií
- Vyberte turnus
- Vyberte článek
- Nahrajte fotografie

Fotografie jsou ukládány do složek podle turnusu a článků.

#### Odstranění fotografií
- Vyberte článek ze kterého chcete odebrat fotografie
- Vyberte fotografie ke smazání
- Uložte

---

### Správa souborů

#### Nahrání souborů
- Nahrajte soubor
- Zadejte název pro zobrazení
- Uložte

#### Odstranění souborů
- Vyberte nahraný soubor pro smazání
- Potvrďte odstranění

---

### Aktuality

- Lze přidávat nové aktuality
- Automaticky se ukládá čas vytvoření
- Lze nastavit vlastní čas

- Aktuality lze mazat

---

## Doporučení

- Pravidelně kontrolujte obsah webu
- Při nahrávání fotografií používejte vhodné názvy
- Neodstraňujte data bez kontroly

---

## Bezpečnost

- Nikomu nesdělujte přihlašovací údaje
- Používejte silná hesla
- Po práci se odhlaste

---

## Řešení problémů

- Pokud se změny neprojeví, zkuste obnovit stránku
- Při chybě nahrávání zkontrolujte formát souboru

## Spuštění
- pro dev spuštění proveďte následující akce:
   - npm install (ve všech složkách)
   - npm run run (pro server)
   - npm run dev (pro klient či administraci)
- pro vytvoření build verze:
   - npm run build (pro klient či administraci)
