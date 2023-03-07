import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PersistService } from '@/store/services/persist.service';
import { ILoadingState } from '@/store/@interfaces/loading.interface';

@Injectable()
export class LoadingStore extends PersistService {
  private isShow$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public timer: NodeJS.Timeout | null = null;

  constructor() {
    super('loading');
  }

  public onIsShowChange(): Observable<boolean> {
    return this.isShow$.asObservable();
  }

  public get state() {
    return this.getState<ILoadingState>({
      message: '',
      show: false,
      content: null,
    } as ILoadingState);
  }

  public setShow(value: boolean) {
    const state = this.state;

    state.show = value;
    this.commit(state);

    this.isShow$.next(value);

    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    this.timer = setTimeout(() => {
      this.setShow(false);
      console.warn(':: App :: Loading timeout');
    }, 30000);
  }

  public setMessage(value: string) {
    const state = this.state;

    state.message = value;
    this.commit(state);
  }

  public setContent(value: any) {
    const state = this.state;

    state.content = value;
    this.commit(state);
  }

  public reset() {
    this.setShow(false);
    this.setMessage('');
    this.setContent(null);
  }
}
