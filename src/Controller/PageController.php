<?php
/**
 * Created by PhpStorm.
 * User: aurelwcs
 * Date: 08/04/19
 * Time: 18:40
 */

namespace App\Controller;

class PageController extends AbstractController
{

    /**
     * Display home page
     *
     * @return string
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     */


    public function map()
    {
        return $this->twig->render('Page/map.html.twig');
    }

    public function highgarden()
    {
        return $this->twig->render('Page/highgarden.html.twig');
    }

    public function ironIslands()
    {
        return $this->twig->render('Page/ironIslands.html.twig');
    }

    public function success()
    {
        return $this->twig->render('Page/success.html.twig');
    }

    public function err()
    {
        return $this->twig->render('Page/err404.html.twig');
    }
}
