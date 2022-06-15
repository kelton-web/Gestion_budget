export type RouteNavigation = {
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