# První komponenta - Section

Vytvořte komponentu Section.

-	`heading` - element, bude vykreslený jako nadpis
-	`perex` - element, bude vykreslený jako tučný paragraf
-	`children` - element, bude vykreslený za nadpisem a perexem

Použití:

```
<Section heading="OWE" perex="Best subject on UHK">
	Text
</Section>
```

# Barevný čítač

Vytvořte komponentu Counter.

## Popis UI:
Dvě tlačítka - "+1" a "-1".


## Úkoly
- Po kliku na "-1" hodnota čítače dekrementuje. Nesmí, klesnout pod 1.
- Po kliku na "+1" hodnota čítače inkrementuje. Nesmí, být vyšší než 6.
- Zobrazte hodnotu čítače.
- Nastylujte hodnotnu čítače tak, aby text byl větší, čím větší hodnota čítače.
- Vyvyslete algoritmus, který změní barvu textu podle hodnoty čítače.

Např. pokud 1 -> černá, pokud 6 -> červená, pokud 3 -> něco mezi černou a červenou.

- Deaktivujte (atribut [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled)) tlačítko "-1" pokud uživatel nemůže dekrementovat.
- Deaktivujte (atribut [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled)) tlačítko "+1" pokud uživatel nemůže inkrementovat.


