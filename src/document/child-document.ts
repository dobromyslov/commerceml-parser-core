import {Counterparty, RequisiteValue, Signee, Warehouse} from '../common';
import {Discount} from './discount';
import {ExtraExpense} from './extra-expense';
import {TaxForDocument} from './tax-for-document';
import {RoleType} from './role-type';
import {OperationType} from './operation-type';

/**
 * CommerceML 2.10
 * 1.1.67. ПодчиненныйДокумент
 *
 * Для выгрузки дополнительных документов сопровождающих хозоперацию и созданных на основании основного документа,
 * например, вместе с заказом покупателя введенные на его основании документы оплаты и отгрузки.
 */
export interface ChildDocument {
  /**
   * Элемент: Ид
   * Тип (компонент): ИдентфикаторГлобальныйТип
   * Обязат. (Множ.): [1]
   *
   * Идентификатор документа уникальный в рамках файла обмена.
   */
  id: string;

  /**
   * Элемент: Номер
   * Тип (компонент): НомерТип
   * Обязат. (Множ.): [1]
   *
   * Номер документа.
   */
  number: string;

  /**
   * Элемент: Дата
   * Тип (компонент): ДатаТип
   * Обязат. (Множ.): [1]
   *
   * Дата документа.
   */
  date: Date;

  /**
   * Элемент: ХозОперация
   * Тип (компонент): ХозОперацияТип
   * Обязат. (Множ.): [1]
   *
   * Вид хозяйственной операции
   */
  operation: OperationType;

  /**
   * Элемент: Роль
   * Тип (компонент): РольТип
   * Обязат. (Множ.): [0..1]
   *
   * Роль предприятия в документе (Плательщик, Получатель, Продавец, Покупатель, комитент, Комиссионер, Лицензиат,
   * Лицензиар)
   */
  role?: RoleType;

  /**
   * Элемент: Валюта
   * Тип (компонент): ВалютаТип
   * Обязат. (Множ.): [0..1]
   *
   * Код валюты по международному классификатору валют (ISO 4217).
   */
  currency?: string;

  /**
   * Элемент: Курс
   * Тип (компонент): КоэффициентТип
   * Обязат. (Множ.): [0..1]
   *
   * Курс указанной валюты по отношению к национальной валюте. Для национальной валюты курс равен 1.
   */
  currencyConversionRate?: number;

  /**
   * Элемент: Сумма
   * Тип (компонент): СуммаТип
   * Обязат. (Множ.): [0..1]
   *
   * Общая сумма по документу. Налоги, скидки и дополнительные расходы включаются в данную сумму в зависимости от
   * установок "УчтеноВСумме".
   */
  sum?: number;

  /**
   * Элемент: Время
   * Тип (компонент): ВремяТип
   * Обязат. (Множ.): [0..1]
   *
   * Время документа.
   */
  time?: Date;

  /**
   * Элемент: СрокПлатежа
   * Тип (компонент): ДатаТип
   * Обязат. (Множ.): [0..1]
   *
   * Срок платежа.
   */
  paymentTerm?: Date;

  /**
   * Элемент: Комментарий
   * Тип (компонент): КомментарийТип
   * Обязат. (Множ.): [0..1]
   *
   * Комментарий.
   */
  comment?: string;

  /**
   * Элемент: Контрагенты
   * Тип (компонент): КонтрагентДляДокумента
   * Обязат. (Множ.): [1..n]
   *
   * Контрагенты с указанием роли в документе, контактной информации и адреса склада.
   */
  counterparties: Counterparty[];

  /**
   * Элемент: Налоги
   * Тип (компонент): НалогДляДокумента
   * Обязат. (Множ.): [0..n]
   *
   * Вид, ставка и сумма налога.
   */
  taxes?: TaxForDocument[];

  /**
   * Элемент: Скидки
   * Тип (компонент): Скидка
   * Обязат. (Множ.): [0..n]
   *
   * Скидка, сумма, проценты.
   */
  discounts?: Discount[];

  /**
   * Элемент: ДопРасходы
   * Тип (компонент): ДопРасход
   * Обязат. (Множ.): [0..n]
   *
   * Дополнительный расход, сумма, проценты.
   */
  extraExpenses?: ExtraExpense[];

  /**
   * Элемент: Склады
   * Тип (компонент): Склад
   * Обязат. (Множ.): [0..n]
   *
   * Склад в документе. В зависимости от Роли составителя документа, на склад осуществляется доставка или со склада
   * производится отгрузка.
   */
  warehouses?: Warehouse[];

  /**
   * Элемент: Товары
   * Тип (компонент): ТоварДляДокумента
   * Обязат. (Множ.): [0..n]
   *
   * Определяет информацию о товарной позиции (строке документа) в объеме, необходимом для оформления (и передачи)
   * документов.
   */
  products?: unknown[];

  /**
   * Элемент: ЗначенияРеквизитов
   * Тип (компонент): ЗначениеРеквизита
   * Обязат. (Множ.): [0..n]
   *
   * Описывает дополнительные значения реквизитов документа.
   */
  requisiteValues?: RequisiteValue[];

  /**
   * Элемент: Подписанты
   * Тип (компонент): Подписант
   * Обязат. (Множ.): [0..n]
   *
   * Реквизиты лиц, подписавших документ.
   */
  signees?: Signee[];
}
