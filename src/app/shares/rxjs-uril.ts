import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';

export const mapBody: <T>(observable: Observable<HttpResponse<T>>) => Observable<T>
  = <T>(observable: Observable<HttpResponse<T>>) => observable.pipe(map(x => x.body as T));
