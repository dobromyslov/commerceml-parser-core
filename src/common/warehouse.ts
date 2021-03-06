import {Address} from './address';
import {ContactInfo} from './contact';

/**
 * CommerceML 2.10
 * 1.1.77. Склад
 *
 * Компонент «Склад» описывает информацию о складе, через который производится отгрузка.
 */
export interface Warehouse {
  /**
   * Элемент: Ид
   * Тип (компонент): ИдентфикаторГлобальныйТип
   * Обязат. (Множ.): [1]
   *
   * Уникальный идентификатор.
   */
  id: string;

  /**
   * Элемент: Наименование
   * Тип (компонент): НаименованиеТип
   * Обязат. (Множ.): [0..n]
   *
   * Наименование склада.
   */
  name?: string;

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
   * Фактический адрес склада.
   */
  address?: Address;

  /**
   * Элемент: Контакт
   * Тип (компонент): КонтактнаяИнформация
   * Обязат. (Множ.): [0..n]
   *
   * Содержит описание возможных способов связи (по телефону, электронной почте и т.д.)
   */
  contactInfo?: ContactInfo[];
}
