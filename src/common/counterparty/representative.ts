import {Address} from '../address';
import {ContactInfo} from '../contact';

/**
 * CommerceML 2.10.
 * 1.1.69. Представитель
 *
 * Описывает представителя контрагента и отношение (связь) представителя и контрагента.
 */
export interface Representative {
  /**
   * Элемент: Ид
   * Тип (компонент): ИдентфикаторГлобальныйТип
   * Обязат. (Множ.): [0..1]
   *
   * Глобально уникальный идентификатор контрагента (рекомендуется использовать GUID)
   */
  id?: string;

  /**
   * Элемент: Наименование
   * Тип (компонент): НаименованиеТип
   * Обязат. (Множ.): [0..1]
   *
   * Наименование контрагента.
   */
  name?: string;

  /**
   * Элемент: РеквизитыЮрЛица
   * Тип (компонент): КомментарийТип
   * Обязат. (Множ.): [0..1]
   *
   * Содержит описание реквизитов контрагента, специфических для юридических лиц.
   */
  companyInfo?: string;

  /**
   * Элемент: РеквизитыФизЛица
   * Тип (компонент): КомментарийТип
   * Обязат. (Множ.): [0..1]
   *
   * Содержит описание реквизитов контрагента, специфических для физических лиц.
   */
  personInfo?: string;

  /**
   * Элемент: Комментарий
   * Тип (компонент): КомментарийТип
   * Обязат. (Множ.): [0..1]
   *
   * Произвольный текст.
   */
  comment?: string;

  /**
   * Элемент: Адрес
   * Тип (компонент): Адрес
   * Обязат. (Множ.): [0..1]
   *
   * Произвольный текст.
   */
  address?: Address;

  /**
   * Элемент: Контакты
   * Тип (компонент): КонтактнаяИнформация
   * Обязат. (Множ.): [0..1]
   *
   * Содержит описание возможных способов связи (по телефону, электронной почте и т.д.).
   */
  contactInfo?: ContactInfo;

  /**
   * Элемент: Отношение
   * Тип (компонент): СтрокаТип
   * Обязат. (Множ.): [1]
   *
   * Описывает отношение (связь) представителя и контрагента.
   * Примеры значений: "Контактное лицо", "Филиал", "Главный офис" и т.п.
   */
  relation: string;
}
