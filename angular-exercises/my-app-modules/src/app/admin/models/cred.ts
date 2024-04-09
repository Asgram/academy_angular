export type CredRole = 'Reader' | 'Editor' | 'Admin'

export class Credentials {
  id?: string;
  username: string;
  password: string;
  role: CredRole;

  constructor(cred: Partial<Credentials>) {
    if (cred.id) this.id = cred.id;
    this.username = cred.username ? cred.username : '';
    this.password = cred.password ? cred.password : '';
    this.role = cred.role ? cred.role : 'Reader';
  }
}