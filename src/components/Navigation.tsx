import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

const NavContainer = styled.nav<{ isTop: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) =>
    props.isTop ? 'black' : 'rgba(0, 0, 0, 0.2)'};
  backdrop-filter: blur(12px);
  box-shadow: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  z-index: 1000;
  height: 60px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  font-family: 'Cormorant Garamond', serif;

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const NavList = styled.ul<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    height: auto;
    background-color: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(12px);
    transform: translateY(${(props) => (props.isOpen ? '0' : '-100%')});
    opacity: ${(props) => (props.isOpen ? '1' : '0')};
    visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
    transition: all 0.3s ease;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }
`;

const NavItem = styled.li`
  cursor: pointer;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 10px;
  transition: all 0.2s ease;
  letter-spacing: 1px;
  text-transform: capitalize;

  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.8);
    transition: width 0.2s ease;
  }

  &:hover {
    color: rgba(255, 255, 255, 1);

    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 15px 20px;
    height: auto;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    justify-content: center;
    color: rgba(255, 255, 255, 0.85);

    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
    }

    &:after {
      display: none;
    }
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  position: absolute;
  right: 0;

  @media (max-width: 768px) {
    display: block;
  }

  span {
    display: block;
    width: 24px;
    height: 1.5px;
    background-color: rgba(255, 255, 255, 0.9);
    transition: all 0.3s ease;
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 24px;
      height: 1.5px;
      background-color: rgba(255, 255, 255, 0.9);
      transition: all 0.3s ease;
    }

    &::before {
      top: -6px;
    }

    &::after {
      top: 6px;
    }
  }

  &.open {
    span {
      background-color: transparent;

      &::before {
        transform: rotate(45deg);
        top: 0;
      }

      &::after {
        transform: rotate(-45deg);
        top: 0;
      }
    }
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = document.querySelector('nav')?.offsetHeight || 60;
      const elementTop = element.offsetTop - navHeight;

      window.scrollTo({
        top: elementTop,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsTop(scrollPosition < 150);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // 초기 스크롤 위치 확인
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <NavContainer isTop={isTop}>
      <NavList isOpen={isOpen}>
        <NavItem onClick={() => scrollToSection('gallery')}>Gallery</NavItem>
        <NavItem onClick={() => scrollToSection('info')}>Wedding</NavItem>
        <NavItem onClick={() => scrollToSection('guide')}>Guide</NavItem>
        <NavItem onClick={() => scrollToSection('gift')}>Gift</NavItem>
      </NavList>
      <HamburgerButton
        onClick={() => setIsOpen(!isOpen)}
        className={isOpen ? 'open' : ''}
        aria-label='Toggle menu'
      >
        <span></span>
      </HamburgerButton>
    </NavContainer>
  );
};

export default Navigation;
