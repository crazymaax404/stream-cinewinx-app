export interface IPaginationDTO {
  page?: number;
  perPage?: number;
}

export interface ICursorPaginationDTO {
  page: string | null;
}

export interface IPaginationAPI {
  next_page?: string | null;
  has_next_page?: boolean;
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
}

export interface ICursorPaginationAPI {
  next_page: string | null;
  has_next_page: boolean;
}
