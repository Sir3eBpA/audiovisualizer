import EventEmitter from 'eventemitter3';

const emitter = new EventEmitter();

const Emitter = {
  on: (event: string, fn: (...args: any[]) => void) => emitter.on(event, fn),
  once: (event: string, fn: (...args: any[]) => void) => emitter.once(event, fn),
  off: (event: string, fn: (...args: any[]) => void) => emitter.off(event, fn),
  emit: (event: string, ...payload: any[]) => emitter.emit(event, payload)
}

Object.freeze(Emitter);

export default Emitter;
