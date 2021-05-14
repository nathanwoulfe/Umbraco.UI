import { UUIEvent } from '../../event/UUIEvent';
import { UUIRadioGroupElement } from './uui-radio-group.element';

export class UUIRadioGroupEvent extends UUIEvent<{}, UUIRadioGroupElement> {
  public static readonly CHANGE = 'change';
}