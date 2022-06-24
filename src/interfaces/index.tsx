export type RouteNavigation = { /* Navigation */
    Accueil: undefined;
    Compte: undefined;
    Statistiques: undefined;
    Ajout_depenses: undefined;
    Ajout_revenus: undefined;
    InputAjoutRevenus:{
        name: string,
        lastname: string,
        montant: number,
        category: string,
        commentaire: string
        date: Date,
    };
    RootTab: undefined;
}

export type ArrayData = {
    _id: string
    user: string
    incomes: Iincomes[]
    expenses: Iexpenses[]
}

export type Iexpenses = {
    date: string
    amount: string
    category: string
    comments: string
    _id_expense: string
}

export type Iincomes = {
    date: string
    amount: string
    category: string
    comments: string
    _id_income: string
}
export type AllData = {
    incomes: Iincomes[]
    expenses: Iexpenses[]
}

