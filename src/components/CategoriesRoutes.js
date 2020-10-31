import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MainCategories from './Categories';
import ListProducts from './ListProducts';

/* TESTING */
import Alimentos from './testing/AlimentosTst';
import Bebidas from './testing/BebidasTst';

export default function CategoriesRoutes() {   
    return (
        <main>
            <Router>
                <Switch>
                    <Route exact path="/" component={MainCategories} />
                    <Route path="/products" children={<ListProducts dataCat="9" />} />
                </Switch>
            </Router>
        </main>
    );
}
