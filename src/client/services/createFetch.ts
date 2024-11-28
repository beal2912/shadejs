import {
  catchError,
  Observable,
  of,
  switchMap,
  first,
} from 'rxjs';

function createFetchClient<T>(data$: Observable<T>) {
  return data$.pipe(
    switchMap((response) => of(response)),
    first(),
    catchError((err) => {
      throw err;
    }),
  );
}

/* function createFetch(data$: Observable<Response>) {
  return data$.pipe(
    switchMap(async (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Fetch Error');
    }),
  );
} */
function createFetch(data$: Observable<Response>) {
  return data$.pipe(
    switchMap(async (response) => {
      if (response.ok) {
        // Parse the body as JSON
        const body = await response.json();
        // Extract the headers
        const headers = Array.from(response.headers.entries()).reduce(
          (acc, [key, value]) => {
            acc[key] = value;
            return acc;
          },
          {} as Record<string, string>
        );
        // Return both body and headers
        return { body, headers };
      }
      throw new Error('Fetch Error');
    }),
  );
}

export {
  createFetchClient,
  createFetch,
};
