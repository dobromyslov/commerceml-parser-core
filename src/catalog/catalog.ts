import {Counterparty, Signee} from '../common';
import {Product} from './product';

/**
 * CommerceML 2.10.
 * 1.1.88. Структура ЭД Каталог
 *
 * Каталог содержит перечень товаров. Может составляться разными предприятиями (например, каталог продукции
 * фирмы «1С»). У каталога всегда определен владелец. Товары в каталоге описываются по определенному классификатору.
 */
export interface Catalog {
  /**
   * Элемент: СодержитТолькоИзменения
   * Тип (компонент): ПереключательТип
   * Обязат. (Множ.): [0..1]
   *
   * ЭД содержит только измененные данные.
   */
  hasOnlyChanges?: boolean;

  /**
   * Элемент: Ид
   * Тип (компонент): ИдентфикаторГлобальныйТип
   * Обязат. (Множ.): [1]
   *
   * Идентификатор каталога.
   */
  id: string;

  /**
   * Элемент: ИдКлассификатора
   * Тип (компонент): ИдентфикаторГлобальныйТип
   * Обязат. (Множ.): [0..1]
   *
   * Идентификатор классификатора.
   */
  classifierId?: string;

  /**
   * Элемент: Наименование
   * Тип (компонент): НаименованиеТип
   * Обязат. (Множ.): [1]
   *
   * Наименование каталога, например «Каталог продукции фирмы 1С».
   */
  name: string;

  /**
   * Элемент: Владелец
   * Тип (компонент): Контрагент
   * Обязат. (Множ.): [1]
   *
   * Определяет владельца каталога.
   */
  owner: Counterparty;

  /**
   * Элемент: Товары
   * Тип (компонент): Товар
   * Обязат. (Множ.): [1..n]
   *
   * Определяет товар в каталоге, содержат описания свойств (характеристик), аналогов, комплектующих и т.д.
   */
  products: Product[];

  /**
   * Элемент: Описание
   * Тип (компонент): КомментарийТип
   * Обязат. (Множ.): [0..1]
   *
   * Описание каталога.
   */
  description?: string;

  /**
   * Элемент: Подписанты
   * Тип (компонент): Подписант
   * Обязат. (Множ.): [0.n]
   *
   * Реквизиты лиц, подписавших каталог.
   */
  signees?: Signee[];
}
