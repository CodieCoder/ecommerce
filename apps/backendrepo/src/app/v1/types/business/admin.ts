export interface IAddAdminPrivilegesForm {
  name?: string;
  description?: string;
  createAdmin: boolean;
  updateAdmin: boolean;
  deleteAdmin: boolean;
  updateBusiness: boolean;
  updateCard: boolean;
  updatePage: boolean;
  createProduct: boolean;
  updateProduct: boolean;
  deleteProduct: boolean;
  createSales: boolean;
  updateSales: boolean;
  deleteSales: boolean;
  createStaff: boolean;
  updateStaff: boolean;
  deleteStaff: boolean;
}

export interface IAdminCreate {
  name: string;
  description: string;
  type: IAddAdminPrivilegesForm;
  userId?: string;
}
