/**
 * CommerceML 2.10
 * 1.1.76. Скидка
 *
 * Компонент «Скидка» описывает предоставляемые скидки по товарной позиции и/или по документу в целом
 * (например: скидка сезонная или скидка, зависящая от количества и т.д.).
 */
export interface Discount {
  /**
   * Элемент: Наименование
   * Тип (компонент): НаименованиеТип
   * Обязат. (Множ.): [1]
   *
   * Название скидки.
   */
  name: string;

  /**
   * Элемент: Сумма
   * Тип (компонент): СуммаТип
   * Обязат. (Множ.): [1]
   *
   * Сумма скидки.
   */
  sum: number;

  /**
   * Элемент: Процент
   * Тип (компонент): ПроцентТип
   * Обязат. (Множ.): [0..1]
   *
   * Процент скидки (наценки).
   */
  percent?: number;

  /**
   * Элемент: УчтеноВСумме
   * Тип (компонент): ПереключательТип
   * Обязат. (Множ.): [0..1]
   *
   * По умолчанию 0 – (не учтено).
   */
  includedInSum: boolean;

  /**
   * Элемент: Комментарий
   * Тип (компонент): КомментарийТип
   * Обязат. (Множ.): [0..1]
   *
   * Произвольный текст.
   */
  comment?: string;
}