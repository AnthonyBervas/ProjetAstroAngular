export class CorpsCeleste {
  private _id?: number;
  private _type: string;

  private _nom: string;
  private _nomInit: string;

  private _G: number = 6.6743e-20;
  private _GInit: number = 6.6743e-20;

  private _masse: number;
  private _masseInit: number;

  private _diametre: number;
  private _diametreInit: number;

  private _x: number;
  private _xInit: number;

  private _y: number;
  private _yInit: number;

  private _vx: number;
  private _vxInit: number;

  private _vy: number;
  private _vyInit: number;

  private _etat: boolean = true;
  private _etatInit: boolean = true;

  private _parent?: CorpsCeleste;

  constructor(
    nom: string,
    type: string,
    masseInit: number,
    diametreInit: number,
    xInit: number,
    yInit: number,
    vxInit: number,
    vyInit: number,
    parent?: CorpsCeleste,
    id?: number
  ) {
    this._id = id;
    this._nom = nom;
    this._nomInit = nom;
    this._type = type;
    this._masseInit = masseInit;
    this._masse = masseInit;
    this._diametreInit = diametreInit;
    this._diametre = diametreInit;
    this._xInit = xInit;
    this._x = xInit;
    this._yInit = yInit;
    this._y = yInit;
    this._vxInit = vxInit;
    this._vx = vxInit;
    this._vyInit = vyInit;
    this._vy = vyInit;
    this._parent = parent;
  }

  /**
   * Getter nom
   * @return {string}
   */
  public get nom(): string {
    return this._nom;
  }

  /**
   * Setter nom
   * @param {string} value
   */
  public set nom(value: string) {
    this._nom = value;
  }

  /**
   * Getter nomInit
   * @return {string}
   */
  public get nomInit(): string {
    return this._nomInit;
  }

  /**
   * Setter nomInit
   * @param {string} value
   */
  public set nomInit(value: string) {
    this._nomInit = value;
  }

  public get id(): number | undefined {
    return this._id;
  }

  public set id(value: number | undefined) {
    this._id = value;
  }

  public get parent(): CorpsCeleste | undefined {
    return this._parent;
  }

  public set parent(value: CorpsCeleste | undefined) {
    this._parent = value;
  }
  /**
   * Getter type
   * @return {string}
   */
  public get type(): string {
    return this._type;
  }

  /**
   * Getter G
   * @return {number}
   */
  public get G(): number {
    return this._G;
  }

  /**
   * Getter GInit
   * @return {number}
   */
  public get GInit(): number {
    return this._GInit;
  }

  /**
   * Getter masse
   * @return {number}
   */
  public get masse(): number {
    return this._masse;
  }

  /**
   * Getter masseInit
   * @return {number}
   */
  public get masseInit(): number {
    return this._masseInit;
  }

  /**
   * Getter diametre
   * @return {number}
   */
  public get diametre(): number {
    return this._diametre;
  }

  /**
   * Getter diametreInit
   * @return {number}
   */
  public get diametreInit(): number {
    return this._diametreInit;
  }

  /**
   * Getter x
   * @return {number}
   */
  public get x(): number {
    return this._x;
  }

  /**
   * Getter xInit
   * @return {number}
   */
  public get xInit(): number {
    return this._xInit;
  }

  /**
   * Getter y
   * @return {number}
   */
  public get y(): number {
    return this._y;
  }

  /**
   * Getter yInit
   * @return {number}
   */
  public get yInit(): number {
    return this._yInit;
  }

  /**
   * Getter vx
   * @return {number}
   */
  public get vx(): number {
    return this._vx;
  }

  /**
   * Getter vxInit
   * @return {number}
   */
  public get vxInit(): number {
    return this._vxInit;
  }

  /**
   * Getter vy
   * @return {number}
   */
  public get vy(): number {
    return this._vy;
  }

  /**
   * Getter vyInit
   * @return {number}
   */
  public get vyInit(): number {
    return this._vyInit;
  }

  /**
   * Getter etat
   * @return {boolean}
   */
  public get etat(): boolean {
    return this._etat;
  }

  /**
   * Getter etatInit
   * @return {boolean}
   */
  public get etatInit(): boolean {
    return this._etatInit;
  }

  /**
   * Setter type
   * @param {string} value
   */
  public set type(value: string) {
    this._type = value;
  }

  /**
   * Setter G
   * @param {number} value
   */
  public set G(value: number) {
    this._G = value;
  }

  /**
   * Setter GInit
   * @param {number} value
   */
  public set GInit(value: number) {
    this._GInit = value;
  }

  /**
   * Setter masse
   * @param {number} value
   */
  public set masse(value: number) {
    this._masse = value;
  }

  /**
   * Setter masseInit
   * @param {number} value
   */
  public set masseInit(value: number) {
    this._masseInit = value;
  }

  /**
   * Setter diametre
   * @param {number} value
   */
  public set diametre(value: number) {
    this._diametre = value;
  }

  /**
   * Setter diametreInit
   * @param {number} value
   */
  public set diametreInit(value: number) {
    this._diametreInit = value;
  }

  /**
   * Setter x
   * @param {number} value
   */
  public set x(value: number) {
    this._x = value;
  }

  /**
   * Setter xInit
   * @param {number} value
   */
  public set xInit(value: number) {
    this._xInit = value;
  }

  /**
   * Setter y
   * @param {number} value
   */
  public set y(value: number) {
    this._y = value;
  }

  /**
   * Setter yInit
   * @param {number} value
   */
  public set yInit(value: number) {
    this._yInit = value;
  }

  /**
   * Setter vx
   * @param {number} value
   */
  public set vx(value: number) {
    this._vx = value;
  }

  /**
   * Setter vxInit
   * @param {number} value
   */
  public set vxInit(value: number) {
    this._vxInit = value;
  }

  /**
   * Setter vy
   * @param {number} value
   */
  public set vy(value: number) {
    this._vy = value;
  }

  /**
   * Setter vyInit
   * @param {number} value
   */
  public set vyInit(value: number) {
    this._vyInit = value;
  }

  /**
   * Setter etat
   * @param {boolean} value
   */
  public set etat(value: boolean) {
    this._etat = value;
  }

  /**
   * Setter etatInit
   * @param {boolean} value
   */
  public set etatInit(value: boolean) {
    this._etatInit = value;
  }
}
