export class CorpsCeleste {
  private _id?: number | undefined;
  private _type?: string | undefined;

  private _nom?: string | undefined;
  private _nomInit?: string | undefined;

  private _G?: number | undefined = 6.6743e-20;
  private _GInit?: number | undefined = 6.6743e-20;

  private _masse?: number | undefined;
  private _masseInit?: number | undefined;

  private _diametre?: number | undefined;
  private _diametreInit?: number | undefined;

  private _x?: number | undefined;
  private _xInit?: number | undefined;

  private _y?: number | undefined;
  private _yInit?: number | undefined;

  private _vx?: number | undefined;
  private _vxInit?: number | undefined;

  private _vy?: number | undefined;
  private _vyInit?: number | undefined;

  private _etat?: boolean | undefined = true;
  private _etatInit?: boolean | undefined = true;

  private _parent?: CorpsCeleste | undefined;

  constructor(
    nom?: string,
    type?: string,
    masseInit?: number,
    diametreInit?: number,
    xInit?: number,
    yInit?: number,
    vxInit?: number,
    vyInit?: number,
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
  public get nom(): string | undefined {
    return this._nom;
  }

  /**
   * Setter nom
   * @param {string} value
   */
  public set nom(value: string | undefined) {
    this._nom = value;
  }

  /**
   * Getter nomInit
   * @return {string}
   */
  public get nomInit(): string | undefined {
    return this._nomInit;
  }

  /**
   * Setter nomInit
   * @param {string} value
   */
  public set nomInit(value: string | undefined) {
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
  public get type(): string | undefined {
    return this._type;
  }

  /**
   * Getter G
   * @return {number}
   */
  public get G(): number | undefined {
    return this._G;
  }

  /**
   * Getter GInit
   * @return {number}
   */
  public get GInit(): number | undefined {
    return this._GInit;
  }

  /**
   * Getter masse
   * @return {number}
   */
  public get masse(): number | undefined {
    return this._masse;
  }

  /**
   * Getter masseInit
   * @return {number}
   */
  public get masseInit(): number | undefined {
    return this._masseInit;
  }

  /**
   * Getter diametre
   * @return {number}
   */
  public get diametre(): number | undefined {
    return this._diametre;
  }

  /**
   * Getter diametreInit
   * @return {number}
   */
  public get diametreInit(): number | undefined {
    return this._diametreInit;
  }

  /**
   * Getter x
   * @return {number}
   */
  public get x(): number | undefined {
    return this._x;
  }

  /**
   * Getter xInit
   * @return {number}
   */
  public get xInit(): number | undefined {
    return this._xInit;
  }

  /**
   * Getter y
   * @return {number}
   */
  public get y(): number | undefined {
    return this._y;
  }

  /**
   * Getter yInit
   * @return {number}
   */
  public get yInit(): number | undefined {
    return this._yInit;
  }

  /**
   * Getter vx
   * @return {number}
   */
  public get vx(): number | undefined {
    return this._vx;
  }

  /**
   * Getter vxInit
   * @return {number}
   */
  public get vxInit(): number | undefined {
    return this._vxInit;
  }

  /**
   * Getter vy
   * @return {number}
   */
  public get vy(): number | undefined {
    return this._vy;
  }

  /**
   * Getter vyInit
   * @return {number}
   */
  public get vyInit(): number | undefined {
    return this._vyInit;
  }

  /**
   * Getter etat
   * @return {boolean}
   */
  public get etat(): boolean | undefined {
    return this._etat;
  }

  /**
   * Getter etatInit
   * @return {boolean}
   */
  public get etatInit(): boolean | undefined {
    return this._etatInit;
  }

  /**
   * Setter type
   * @param {string} value
   */
  public set type(value: string | undefined) {
    this._type = value;
  }

  /**
   * Setter G
   * @param {number} value
   */
  public set G(value: number | undefined) {
    this._G = value;
  }

  /**
   * Setter GInit
   * @param {number} value
   */
  public set GInit(value: number | undefined) {
    this._GInit = value;
  }

  /**
   * Setter masse
   * @param {number} value
   */
  public set masse(value: number | undefined) {
    this._masse = value;
  }

  /**
   * Setter masseInit
   * @param {number} value
   */
  public set masseInit(value: number | undefined) {
    this._masseInit = value;
  }

  /**
   * Setter diametre
   * @param {number} value
   */
  public set diametre(value: number | undefined) {
    this._diametre = value;
  }

  /**
   * Setter diametreInit
   * @param {number} value
   */
  public set diametreInit(value: number | undefined) {
    this._diametreInit = value;
  }

  /**
   * Setter x
   * @param {number} value
   */
  public set x(value: number | undefined) {
    this._x = value;
  }

  /**
   * Setter xInit
   * @param {number} value
   */
  public set xInit(value: number | undefined) {
    this._xInit = value;
  }

  /**
   * Setter y
   * @param {number} value
   */
  public set y(value: number | undefined) {
    this._y = value;
  }

  /**
   * Setter yInit
   * @param {number} value
   */
  public set yInit(value: number | undefined) {
    this._yInit = value;
  }

  /**
   * Setter vx
   * @param {number} value
   */
  public set vx(value: number | undefined) {
    this._vx = value;
  }

  /**
   * Setter vxInit
   * @param {number} value
   */
  public set vxInit(value: number | undefined) {
    this._vxInit = value;
  }

  /**
   * Setter vy
   * @param {number} value
   */
  public set vy(value: number | undefined) {
    this._vy = value;
  }

  /**
   * Setter vyInit
   * @param {number} value
   */
  public set vyInit(value: number | undefined) {
    this._vyInit = value;
  }

  /**
   * Setter etat
   * @param {boolean} value
   */
  public set etat(value: boolean | undefined) {
    this._etat = value;
  }

  /**
   * Setter etatInit
   * @param {boolean} value
   */
  public set etatInit(value: boolean | undefined) {
    this._etatInit = value;
  }
}
