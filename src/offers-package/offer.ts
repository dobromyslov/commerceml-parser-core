import {BaseMeasurementUnit} from '../common';
import {QuantityInStock} from './quantity-in-stock';
import {Price} from './price';

/**
 * CommerceML 2.10.
 * 1.1.68. ПредложениеДляИзменений
 *
 * Для корректировки публикуемых предложений с целью ускорения выгрузки.
 */
export interface Offer {
  /**
   * Элемент: Ид
   * Тип (компонент): Идентификатор80
   * Обязат. (Множ.): [0..1]
   *
   * Глобально уникальный идентификатор товара.
   */
  id?: string;

  /**
   * Элемент: Штрихкод
   * Тип (компонент): ШтрихкодТип
   * Обязат. (Множ.): [0..1]
   *
   * Штрихкод «Глобал 1».
   */
  barcode?: string;

  /**
   * Элемент: Артикул
   * Тип (компонент): АртикулТип
   * Обязат. (Множ.): [0..1]
   *
   * Артикул.
   */
  article?: string;

  // eslint-disable-next-line no-warning-comments
  name: string; // TODO: Отсутствует в докумнетации и в XSD, но есть в выгрузке.

  /**
   * Элемент: ИдХарактеристики
   * Тип (компонент): ИдентификаторГлобальныйТип
   * Обязат. (Множ.): [0..1]
   *
   * Идентификатор характеристики товара.
   */
  characteristicsId?: string;

  /**
   * Элемент: КодЕдиницыИзмерения
   * Тип (компонент): ЕдиницаТип
   * Обязат. (Множ.): [0..1]
   *
   * Код единицы измерения товара по ОКЕИ.
   */
  // eslint-disable-next-line no-warning-comments
  measureUnitCode?: string; // TODO: отсутствует в выгрузке. Вместо этого есть БазоваяЕдиница.

  // eslint-disable-next-line no-warning-comments
  baseMeasurementUnit: BaseMeasurementUnit; // TODO: отсутствует в документации, но есть в выгрузке.

  /**
   * Элемент: Склады
   * Тип (компонент): ОстаткиПоСкладам
   * Обязат. (Множ.): [0..n]
   *
   * Идентификатор склада (из перечня складов организации) и количество на этом складе.
   */
  stocks?: QuantityInStock[];

  /**
   * Элемент: Количество
   * Тип (компонент): КоличествоТип
   * Обязат. (Множ.): [0..1]
   *
   * Суммарный остаток товара на всех складах.
   */
  quantity?: number;

  /**
   * Элемент: Цены
   * Тип (компонент): Цена
   * Обязат. (Множ.): [0..n]
   *
   * Цена за единицу товара.
   */
  prices?: Price[];
}
