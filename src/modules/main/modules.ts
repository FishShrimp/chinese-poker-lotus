/*!
 *
 * Copyright 2017 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2017-03-23 16:50:39
 * @version 1.0.0
 * @desc modules.ts
 *
 * When you need to add a module, register it here first
 */


import { NMap } from '../../shared/misc'


// avoid use 0 in module id and cmd id
export const modules: NMap<string> = {
  0x0001: 'user',
  0x0002: 'game',
  0x0003: 'test',
}

