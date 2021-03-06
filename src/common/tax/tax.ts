/**
 * CommerceML 2.10.
 * 1.1.62. Налог
 *
 * Компонент «Налог» описывает вид налога (НДС, НП и т.д.), флаги акциза и учета в сумме.
 */
export interface Tax {
  /**
   * Элемент: Наименование
   * Тип (компонент): НаименованиеТип
   * Обязат. (Множ.): [1]
   *
   * Вид налога. Например, НДС.
   */
  name: string;

  /**
   * Элемент: УчтеноВСумме
   * Тип (компонент): ПереключательТип
   * Обязат. (Множ.): [0..1]
   *
   * По умолчанию 0 (не учтено в сумме документа, пакета предложений).
   */
  includedInSum?: boolean;

  /**
   * Элемент: Акциз
   * Тип (компонент): ПереключательТип
   * Обязат. (Множ.): [0..1]
   *
   * Флаг, указывающий, что налог является акцизом.
   */
  excise?: boolean;
}
